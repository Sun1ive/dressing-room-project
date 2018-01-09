<template>
  <div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      shoulders: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setShoulders', this.shoulders);
      this.$router.push('/');
    },
  },
  computed: {
    getShouldersSize() {
      const params = {
        size: null,
        number: null,
      };
      const z = this.shoulders;

      if (z >= 30 && z <= 34) {
        params.size = 'XS';
        params.number = z;
      }
      if (z > 34 && z <= 38) {
        params.size = 'S';
        params.number = z;
      }
      if (z > 38 && z <= 42) {
        params.size = 'M';
        params.number = z;
      }
      if (z > 42 && z <= 46) {
        params.size = 'L';
        params.number = z;
      }

      return params.size;
    },
  },
  created() {
    if (this.$store.getters.userShoulders) {
      this.shoulders = this.$store.getters.userShoulders;
    }
  },
};
</script>


<style scoped>

</style>