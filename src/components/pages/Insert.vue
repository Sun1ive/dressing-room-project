<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-form @submit.prevent="runCompare">
          <h1>Вставьте ссылку на товар</h1>
          <v-text-field label="Вставьте ссылку" v-model.lazy="link"></v-text-field>
          <v-btn color="primary" type="submit">Посмотреть</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Storage from '@/Utils/LocalStorage';

export default {
  data() {
    return {
      link: '',
    };
  },
  methods: {
    runCompare() {
      this.setLocalData();
      const filteredItem = this.items.filter(item => item.link === this.link);

      if (filteredItem.length === 0) {
        this.$store.commit('runCompare', this.items);
      }
      this.$store.commit('runCompare', filteredItem);
      this.$store.commit('setLoading', true);

      this.$router.push('/single-result');
    },
    setLocalData() {
      Storage.remove('DressingUserData');
      const localData = {
        breast: this.$store.getters.getBreast,
        waist: this.$store.getters.getWaist,
        hips: this.$store.getters.getHips,
      };
      Storage.set('DressingUserData', localData);
    },
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
