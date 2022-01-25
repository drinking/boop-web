<template>
  <a-textarea placeholder="Text filed, e.g. Type Hi above then Tab here and input your name." :rows="4"
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
