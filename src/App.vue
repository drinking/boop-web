<template>
  <div id="app">
    <HelloWorld id="command" @handlers="handle"/>
    <InputView id="editor" @transfer="update"/>
    <p style="width: 80%; margin-top:30px;" >{{ output }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputView from './components/EditArea.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputView
  },
  data() {
    return {
      output: '',
      editText:''
    };
  },
  methods: {
    update(text) {
      this.editText = text;
    },
    handle(operation) {
      this.output = operation(this.editText)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#editor {
  margin-top:30px;
  width:80%;
  height: 300px;
}
</style>
