import { mapGetters, mapMutations } from 'vuex';
import { LocalStorage, setLocalData } from '../utils/storage';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setErrorMessage', 'setErrorState']),
    async onCheckout() {
      setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
      if (this.isSelected) {
        await this.$store.dispatch('compareSingle', this.isSelected);
        this.$router.push('/result');
      } else {
        await this.$store.dispatch('compareProductsWithType');
        this.$router.push('/result');
      }
    },
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
