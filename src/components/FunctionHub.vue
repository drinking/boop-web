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
    },
  },
};
</script>
