const server = require('express')()
const http = require('http').createServer(server)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id)

  socket.on('send', (text) => {
    let newText = "<" + socket.id + "> " + text
    if (text === 'struct card') {
      io.emit('struct create', 130, 180)
    }

    if (text === 'struct token') {
      io.emit('struct create', 100, 100)
    }

    io.emit('receive', newText)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected: ' + socket.id)
  })
})

http.listen(3000, () => {
  console.log('Server started...')
})