<template>
  <div id="app">

    <img src="./assets/_WEBOOP.svg">
    <br/>
    <FunctionHub @handlers="handle"/>
    <EditArea id="editor" @transfer="update"/>
    <br/>
    <code style="color: #fff;width: 60px; margin-top:30px;overflow: auto;" >{{ output }}</code>
  </div>
</template>

<script>
import FunctionHub from './components/FunctionHub.vue'
import EditArea from './components/EditArea.vue'

export default {
  name: 'App',
  beforeCreate: function() {
    document.getElementsByTagName("body")[0]
    .setAttribute("style","background-color:#121212;");
  },
  data() {
    return {
      output: '',
      editText:'',
      operation:function() {
        return ""
      }
    };
  },
  components: {
    FunctionHub,
    EditArea
  },
  methods: {
    update(text) {
      this.editText = text;
      this.output = this.operation(text);
    },
    handle(operation) {
      this.operation = operation;
      this.output = operation(this.editText);
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
  background-color: #121212;
}

#editor {
  margin-top:30px;
  margin-bottom:30px;
  width:60%;
  height: 300px;
}
</style>
