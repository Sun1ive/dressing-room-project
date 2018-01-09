<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      breast: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setBreast', this.breast);
      this.$router.push('/');
    },
  },
  computed: {
    getBreastSize() {
      const params = {
        number: null,
        size: null,
      };
      const x = this.breast;

      if (x >= 82 && x < 86) {
        params.number = x;
        params.size = 'XS';
      }
      if (x > 85 && x < 90) {
        params.number = x;
        params.size = 'S';
      }
      if (x > 89 && x < 94) {
        params.number = x;
        params.size = 'M';
      }
      if (x > 93 && x <= 97) {
        params.number = x;
        params.size = 'L';
      }
      return params.size;
    },
  },
  created() {
    if (this.$store.getters.userBreast) {
      this.breast = this.$store.getters.userBreast;
    }
  },
};
</script>

<style lang="stylus" scoped>
.card__media {
  margin: 0 auto;
}
</style>


<style scoped>

</style>