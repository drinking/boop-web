<template>
  <a-textarea placeholder="Basic usage" :rows="4" 
  @change="handleChange"/>
</template>


<script>

export default {
  methods: {
    handleChange(e) {
      this.$emit('transfer',e.target.value)
    },
  },
};


</script>
