<template>
  <div id="app">
    <div id="game">
      <Game />
    </div>
    <div id="border" />
    <div id="input">
      <Chat />
    </div>
  </div>
</template>

<script>
  import Chat from './components/Chat'
  import Game from './components/Game'

  export default {
    name: 'App',
    components: {
      Chat
      , Game
    }
  }
</script>

<style>
  body {
    background-color: salmon;
  }

  #app {
    font-family: 'Trebuchet MS';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    background-color: black;
    color: cyan;
    display: flex;
    margin-top: 60px;
  }
  #game {
    width: 50vw;
    height: 100vh;
  }
  #input {
    width: 50vw;
    height: 100vh;
  }
  #border {
    border-right: 2px solid cyan;
  }
  @media (max-width: 1000px) {
    #app {
      flex-direction: column;
    }
    #game {
      width: 100vw;
      height: 50vh;
    }
    #input {
      width: 100vh;
      height: 50vh;
    }
  }
</style>
