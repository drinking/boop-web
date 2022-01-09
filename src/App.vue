<template>
  <div id="app">
    <h2 id="title" >Boop Web</h2>
    <FunctionHub @handlers="handle"/>
    <EditArea id="editor" @transfer="update"/>
    <pre style="width: 80%; margin-top:30px;overflow: auto;" >{{ output }}</pre>
  </div>
</template>

<script>
import FunctionHub from './components/FunctionHub.vue'
import EditArea from './components/EditArea.vue'

export default {
  name: 'App',
  beforeCreate: function() {
        document.getElementsByTagName("body")[0]
        .setAttribute("style","background-color:antiquewhite");
  },
  components: {
    FunctionHub,
    EditArea
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
  background-color: antiquewhite;
}

#editor {
  margin-top:30px;
  width:80%;
  height: 300px;
}

#title {
    font-size: 45px;
    line-height: 46px;
    /*font-family: 'Rubik', sans-serif;*/
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    max-width: 85%;
    margin: auto;
    margin-bottom: 30px;
    margin-top: 60px;
    color: #2e292c;
    text-align: center;
}
</style>
