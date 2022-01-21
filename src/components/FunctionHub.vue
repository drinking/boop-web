<template>
  <a-select
    mode="multiple"
    placeholder="Chose your functions"
    :value="selectedItems"
    style="width: 80%;margin-top: 30px; max-width: 600px;"
    @change="handleChange">
    <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>

<script>
import * as hub from '.././hub.js'

function genSVG(index) {

  const rainBow = ['EE6352','F79D84','FAC05E','59CD90','3FA7D6','454372']
  var color = rainBow[index%6];
  var svg = '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path style="fill: #'+ color + ';stroke: rgba(0, 0, 0, 0); stroke-opacity: 0;" d="M 0 0 L 470 0 L 500 250 L 470 500 L 0 500 L 25 250 L 0 0 Z"/></svg>'

  var start = '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path style="fill: #'+ color + '; stroke: rgba(0, 0, 0, 0); stroke-opacity: 0;" d="M 0 0 L 470 0 L 500 250 L 470 500 L 0 500 L 0 250 L 0 0 Z"/></svg>'
  return index == 0 ? start : svg
}

function updateColor(items) {
  for (var i = 0; i < items.length; i++) {
    var title = "[title=\"" + items[i] + "\"]"
    document.querySelectorAll(title).forEach(el => {
        var svg = genSVG(i);
        var encoded = window.btoa(svg);
        el.style.backgroundImage = "url(data:image/svg+xml;base64,"+encoded+")";
        el.style['background-size'] = "cover";
        el.style['margin-right'] = 0;
        el.style['border'] = "0px solid #fff"
        el.style['color'] = "#fff"
    });
  }
  
}

export default {

  created() {
    this.options = hub.loadFuncs();
  },
  data() {
    return {
      selectedItems: [],
      options:[],
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(o => !this.selectedItems.includes(o));
    }
  },
  methods: {
    handleChange(selectedItems) {
      this.selectedItems = selectedItems;
      var handler = this.selectedItems.length == 0 
                    ? function() {return ""}
                    : this.selectedItems
                        .map(key => {
                          return hub.mapFunc(key);
                        })
                        .reduce((acc,cur) => function(text) { return cur(acc(text)) })
      this.$emit('handlers',function(text){
        return handler(text)
      })

      setTimeout(function(){ updateColor(selectedItems); }, 50);

    },
  },
};
</script>
