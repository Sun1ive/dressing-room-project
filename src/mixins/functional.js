import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setLoading']),
    ...mapActions(['compareProductsWithType', 'compareSingle']),
    async changeErrorState() {
      this.setSelectedItem(null);
      await this.compareProductsWithType();
      this.$router.push('/result');
    },
  },
  computed: {
    ...mapGetters({
      isSelectedItem: 'isSelectedItem',
      isLoading: 'isLoading',
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
};
