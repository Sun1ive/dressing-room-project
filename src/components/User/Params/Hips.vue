<template>
  <div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      hips: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setHips', this.hips);
      this.$router.push('/');
    },
  },
  computed: {
    getHipsSize() {
      const params = {
        size: null,
        number: null,
      };

      const y = this.hips;
      if (y >= 90 && y <= 93) {
        params.size = 'XS';
        params.number = y;
      }
      if (y >= 94 && y <= 97) {
        params.size = 'S';
        params.number = y;
      }
      if (y >= 98 && y <= 101) {
        params.size = 'M';
        params.number = y;
      }
      if (y >= 102 && y <= 105) {
        params.size = 'L';
        params.number = y;
      }
      return params.size;
    },
  },
  created() {
    if (this.$store.getters.userHips) {
      this.hips = this.$store.getters.userHips;
    }
  }
};
</script>

<style scoped>

</style>