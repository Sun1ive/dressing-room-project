<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setHeight', this.height);
      this.$router.push('/');
    },
  },
};
</script>


<style scoped>

</style>