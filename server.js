const server = require('express')()
const http = require('http').createServer(server)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id)

  socket.on('send', (text) => {
    let newText = "<" + socket.id + "> " + text
    io.emit('receive', newText)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected: ' + socket.id)
  })
})

http.listen(3000, () => {
  console.log('Server started...')
})