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
import { LocalStorage } from '@/utils/storage';

export default {
  data() {
    return {
      link: '',
    };
  },
  methods: {
    onCheckout() {
      const data = LocalStorage.get('DressingUserData');
      if (data === null || data === undefined || data === {}) {
        this.$store.commit('setSelectedItem', this.link);
        this.$router.push('/params');
      } else {
        this.setLocalData();
        this.$store.commit('setLoading', true);

        const filteredItem = this.items.filter(item => item.link === this.link);
        this.$store.commit('runCompare', filteredItem);
        this.$router.push('/single-result');
      }
    },
    setLocalData() {
      LocalStorage.remove('DressingUserData');
      const localData = {
        breast: this.$store.getters.getBreast,
        waist: this.$store.getters.getWaist,
        hips: this.$store.getters.getHips,
        arms: this.$store.getters.getArms,
      };
      LocalStorage.set('DressingUserData', localData);
    },
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
