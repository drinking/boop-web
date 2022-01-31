<template>
  <a-textarea 
  :rows="4"
  :value="content"
  placeholder="Text filed, e.g. Type Hi above then Tab here and input your name." 
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
    },
    updateContent(text) {
      this.content = text
    },
  },
};

</script>
