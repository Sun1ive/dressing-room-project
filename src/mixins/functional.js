import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setLoading', 'setError']),
    ...mapActions(['getItemsByPartsAndType', 'compareSingle', 'getItemsByPartsAndType']),
    async checkAllProducts() {
      if (this.isError.state) {
        this.setError({ state: false, status: 200, message: '' });
      }
      this.setSelectedItem(null);
      await this.getItemsByPartsAndType();
      this.$router.push('/result');
    },
  },
  computed: {
    ...mapGetters({
      isSelectedItem: 'isSelectedItem',
      isError: 'isError',
      isLoading: 'isLoading',
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
};
