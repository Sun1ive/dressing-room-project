import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setSelectedItem']),
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
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
};
