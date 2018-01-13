import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setErrorMessage', 'setErrorState']),
    ...mapActions(['compareProductsWithType', 'compareSingle']),
    async changeErrorState() {
      this.setErrorState(false);
      this.setSelectedItem(null);
      await this.compareProductsWithType();
      this.$router.push('/result');
    },
  },
  computed: {
    ...mapGetters({
      errorState: 'isErrorState',
      errorMessage: 'isErrorMessage',
      isSelectedItem: 'isSelectedItem',
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
};
