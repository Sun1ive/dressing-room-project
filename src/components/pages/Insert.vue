<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 lg6 class="text-xs-center">
        <v-form @submit.prevent="onSubmit">
          <h1>Вставьте ссылку на товар</h1>
          <v-text-field label="Вставьте ссылку" v-model.lazy="link"></v-text-field>
          <v-btn color="primary" type="submit">Посмотреть</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import onCompare from '@/Utils/Compare';
import Storage from '@/Utils/LocalStorage';

export default {
  data() {
    return {
      link: '',
      userArr: [],
    };
  },
  methods: {
    onSubmit() {
      this.setLocalData();
      const filteredItem = this.items.filter(item => item.link === this.link);

      if (filteredItem.length === 0) {
        this.userArr = onCompare(this.items, this.isSetBreast, this.isSetWaist, this.isSetHips);
      }
      this.userArr = onCompare(filteredItem, this.isSetBreast, this.isSetWaist, this.isSetHips);

      this.$store.commit('setFilteredDresses', this.userArr);
      this.$store.commit('setLoading', true);

      this.$router.push('/single-result');
    },
    setLocalData() {
      Storage.remove('DressingUserData');
      const localData = {
        breast: this.isSetBreast,
        waist: this.isSetWaist,
        hips: this.isSetHips,
      };
      Storage.set('DressingUserData', localData);
    },
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    selectedItem() {
      return this.$store.getters.selectedItem;
    },
    isSetBreast() {
      return this.$store.getters.getBreast;
    },
    isSetWaist() {
      return this.$store.getters.getWaist;
    },
    isSetHips() {
      return this.$store.getters.getHips;
    },
  },
};
</script>
