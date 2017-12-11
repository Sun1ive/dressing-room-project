export default {
  data() {
    return {
      waist: null,
    };
  },
  computed: {
    getWaist() {
      return this.waist;
    },
    getWaistSize() {
      const params = {
        size: null,
        number: null,
      };
      if (this.getWaist >= 63 && this.getWaist < 67) {
        params.size = 'XS';
        params.number = this.getWaist;
      }
      if (this.getWaist > 66 && this.getWaist < 71) {
        params.size = 'S';
        params.number = this.getWaist;
      }
      if (this.getWaist > 70 && this.getWaist < 75) {
        params.size = 'M';
        params.number = this.getWaist;
      }
      if (this.getWaist > 74 && this.getWaist <= 77) {
        params.size = 'L';
        params.number = this.getWaist;
      }
      this.$emit('setWaist', params);
      return params.size;
    },
  },
};
