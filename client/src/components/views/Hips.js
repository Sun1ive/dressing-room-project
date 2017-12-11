export default {
  data() {
    return {
      hips: null,
    };
  },
  computed: {
    getHips() {
      return this.hips;
    },
    getHipsSize() {
      const params = {
        size: null,
        number: null,
      };
      if (this.getHips >= 90 && this.getHips < 94) {
        params.size = 'XS';
        params.number = this.getHips
      }
      if (this.getHips > 93 && this.getHips < 98) {
        params.size = 'S';
        params.number = this.getHips
      }
      if (this.getHips > 94 && this.getHips < 102) {
        params.size = 'M';
        params.number = this.getHips
      }
      if (this.getHips > 101 && this.getHips <= 105) {
        params.size = 'L';
        params.number = this.getHips
      }
      this.$emit('setHips', params);
      return params.size
    },
  },
};
