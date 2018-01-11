import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setErrorMessage', 'setErrorState']),
    async changeErrorState() {
      this.setErrorState(false);
      this.setSelectedItem(null);
      await this.$store.dispatch('compareProductsWithType');
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
