<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      waist: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setWaist', this.waist);
      this.$router.push('/');
    },
  },
  computed: {
    getWaistSize() {
      const params = {
        size: null,
        number: null,
      };
      const z = this.waist;

      if (z >= 63 && z < 67) {
        params.size = 'XS';
        params.number = z;
      }
      if (z > 66 && z < 71) {
        params.size = 'S';
        params.number = z;
      }
      if (z > 70 && z < 75) {
        params.size = 'M';
        params.number = z;
      }
      if (z > 74 && z <= 77) {
        params.size = 'L';
        params.number = z;
      }

      return params.size;
    },
  },
    created() {
    if (this.$store.getters.userWaist) {
      this.waist = this.$store.getters.userWaist;
    }
  }
};
</script>

<style scoped>

</style>