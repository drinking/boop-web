<template>
  <a-textarea placeholder="Text filed, e.g. Type Hi above and your name below, and then UpperCase above, having fun." :rows="4"
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
