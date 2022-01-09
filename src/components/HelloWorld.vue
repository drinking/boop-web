<template>
  <a-select
    mode="multiple"
    placeholder="Inserted are removed"
    :value="selectedItems"
    style="width: 80%"
    @change="handleChange">
    <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>

<script>
const OPTIONS = ['UpperCase', 'SplitBySpace'];
const METHODS = {
  'UpperCase': function(text){
    return text.toUpperCase()
  },
  'SplitBySpace': function(text){
    return text.split(' ').join('<br>');
  }
}

export default {
  data() {
    return {
      selectedItems: [],
    };
  },
  computed: {
    filteredOptions() {
      return OPTIONS.filter(o => !this.selectedItems.includes(o));
    },
  },
  methods: {
    handleChange(selectedItems) {
      this.selectedItems = selectedItems;
      var handler = this.selectedItems.length == 0 
                    ? function() {return ""}
                    : this.selectedItems
                        .map(key => METHODS[key])
                        .reduce((acc,cur) => function(text) { return cur(acc(text)) })


      this.$emit('handlers',function(text){
        return handler(text)
      })
    },
  },
};
</script>
