<template>
  <a-textarea 
  :rows="4"
  :value="content"
  placeholder="Paramaters here" 
  @change="handleChange"
  />
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    handleChange(e) {
      this.$emit('transfer',e.target.value)
    }
  },
};

</script>
