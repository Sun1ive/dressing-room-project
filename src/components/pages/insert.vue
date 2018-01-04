<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-form @submit.prevent="onCheckout">
          <h1>Вставьте ссылку на товар</h1>
          <v-text-field
          label="Вставьте ссылку"
          v-model.lazy="link"
          ></v-text-field>
          <v-btn
          color="primary"
          type="submit"
          >Посмотреть</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { LocalStorage, setLocalData } from '@/utils/storage';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      link: '',
    };
  },
  methods: {
    onCheckout() {
      const data = LocalStorage.get('DressingUserData');

      if (!data || data === undefined || data === {}) {
        this.$store.commit('setSelectedItem', this.link);
        this.$router.push('/params');
      } else {
        setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);

        this.$store.commit('setLoading', true);

        const filteredItem = this.items.filter(item => item.link === this.link);

        if (filteredItem.length === 0) {
          this.$store.dispatch('sendMail', this.link);
          this.$router.push('/404');
        } else {
          filteredItem.forEach(x => {
            switch (x.type) {
              case 'Плечевые':
                this.$store.commit('runCompare', filteredItem);
                this.$router.push('/single-result');
                break;
              case 'Поясные':
                this.$store.commit('runCompareBottom', filteredItem);
                this.$router.push('/single-result');
                break;
              default:
                break;
            }
          });
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      items: 'items',
      height: 'getHeight',
      shoulders: 'getShoulders',
      breast: 'getBreast',
      waist: 'getWaist',
      hips: 'getHips',
    }),
  },
};
</script>
