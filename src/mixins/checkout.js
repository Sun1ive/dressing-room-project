import { LocalStorage, setLocalData } from '@/utils/storage';
import { mapGetters, mapMutations } from 'vuex';
import each from 'lodash/each';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setLoading', 'runCompare', 'runCompareBottom']),
    filter(arr) {
      let path;
      if (arr.length > 1) {
        path = '/result';
      } else {
        path = '/single-result';
      }
      each(arr, x => {
        switch (x.type) {
          case 'Плечевые':
            this.runCompare(arr);
            this.$router.push(`${path}`);
            break;
          case 'Поясные':
            this.runCompareBottom(arr);
            this.$router.push(`${path}`);
            break;
          default:
            break;
        }
      });
    },
    onCheckout() {
      this.setLoading(true);
      let filteredItem = [];
      const path = window.location.pathname;
      const data = LocalStorage.get('DressingUserData');

      switch (path) {
        case '/insert':
          if (data) {
            filteredItem = this.items.filter(item => item.link === this.link);
            if (filteredItem.length <= 0) {
              this.$store.dispatch('sendMail', this.link);
              this.$router.push('/404');
            } else {
              this.setSelectedItem(this.link);
              this.filter(filteredItem);
            }
          } else if (!data) {
            this.setSelectedItem(this.link);
            this.$router.push('/');
          }
          break;
        case '/':
          setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
          if (this.selectedItem) {
            filteredItem = this.items.filter(item => item.link === this.selectedItem);
            this.filter(filteredItem);
          } else {
            filteredItem = this.items.filter(item => item.type === this.type);
            this.filter(filteredItem);
          }
          break;

        default:
          break;
      }
    },
  },
  computed: {
    isReadyToCheckout() {
      return !this.height || !this.breast || !this.waist || !this.hips || !this.shoulders;
    },
    ...mapGetters({
      items: 'items',
      selectedItem: 'selectedItem',
      height: 'getHeight',
      shoulders: 'getShoulders',
      breast: 'getBreast',
      waist: 'getWaist',
      hips: 'getHips',
      type: 'getType',
    }),
  },
};
