import { LocalStorage, setLocalData } from '@/utils/storage';
import { mapGetters, mapMutations } from 'vuex';
import each from 'lodash/each';

export default {
  methods: {
    ...mapMutations(['setSelectedItem', 'setLoading', 'runCompare', 'runCompareBottom']),
    filter(arr) {
      let path;
      if (arr.length > 1) {
        path = '/result'
      } else {
        path = '/single-result'
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
          default: break;
        }
      });
    },
    onCheckout() {
      this.setLoading(true);
      let filteredItem = [];

      const data = LocalStorage.get('DressingUserData');
      if (!data || data === undefined || data === {}) {
        this.selectItem(this.link);
        this.$router.push('/params');
      }
      if (data) {
        setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
        if (this.selectedItem) {
          filteredItem = this.items.filter(item => item.link === this.selectedItem);
          this.filter(filteredItem);
        } else if (this.link) {
          filteredItem = this.items.filter(item => item.link === this.link);
          if (filteredItem.length <= 0) {
            this.$store.dispatch('sendMail', this.link);
            this.$router.push('/404');
          } else {
            this.filter(filteredItem);
          }
        } else if (filteredItem.length <= 0) {
          this.filter(this.items);
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      items: 'items',
      selectedItem: 'selectedItem',
      height: 'getHeight',
      shoulders: 'getShoulders',
      breast: 'getBreast',
      waist: 'getWaist',
      hips: 'getHips',
    }),
  },
};
