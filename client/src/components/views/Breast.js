export default {
  data() {
    return {
      breast: null,
      prevComparison: null,
    };
  },
  computed: {
    getBreast() {
      return this.breast;
    },
    getBreastSize() {
      const params = {
        size: null,
        number: null,
      };

      if (this.getBreast >= 82 && this.getBreast < 86) {
        params.size = 'XS';
        params.number = this.getBreast;
      }
      if (this.getBreast > 85 && this.getBreast < 90) {
        params.size = 'S';
        params.number = this.getBreast;
      }
      if (this.getBreast > 89 && this.getBreast < 94) {
        params.size = 'M';
        params.number = this.getBreast;
      }
      if (this.getBreast > 93 && this.getBreast <= 97) {
        params.size = 'L';
        params.number = this.getBreast;
      }

      this.$emit('setBreast', params);

      return params.size;
    },
  },
};
