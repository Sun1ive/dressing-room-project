<template>
  <v-container fluid>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>Укажите свои параметры</h1>
      </v-flex>
    </v-layout>

    <v-layout justify-center v-if="!isSetBreast">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/breast"
        >Обхват груди</v-btn>
      </v-flex>
    </v-layout>

    <ParamsWrapper v-if="isSetBreast">
      <v-card-text slot="params">Грудь: {{ isSetBreast }} см <v-btn
      fab
      to="/breast"
      ><v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </ParamsWrapper>


    <v-layout justify-center v-if="!isSetWaist">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/waist"
        >Обхват талии</v-btn>
      </v-flex>
    </v-layout>

    <ParamsWrapper v-if="isSetWaist">
      <v-card-text slot="params">Талия: {{ isSetWaist }} см <v-btn
      fab
      to="/waist"
      ><v-icon>mode_edit</v-icon></v-btn></v-card-text>
    </ParamsWrapper>

    <v-layout justify-center v-if="!isSetHips">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/hips"
        >Обхват бедер</v-btn>
      </v-flex>
    </v-layout>

    <ParamsWrapper v-if="isSetHips">
      <v-card-text slot="params">Бедра: {{ isSetHips }} см <v-btn
      fab
      to="/hips"
      >
      <v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </ParamsWrapper>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        v-if="isShowSingleCompare"
        @click="checkSingleItem"
        >Посмотреть Single</v-btn>

        <v-btn
        @click="checkAll"
        >Посмотреть All</v-btn>
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
      userArr: [],
    };
  },
  methods: {
    checkAll() {
      this.setLocalData();

      this.userArr = onCompare(this.items, this.isSetBreast, this.isSetWaist, this.isSetHips);

      this.$store.commit('setFilteredDresses', this.userArr);
      this.$store.commit('setLoading', true);

      this.$router.push('/result');
    },
    checkSingleItem() {
      this.setLocalData();
      const filteredItem = this.items.filter(item => item.link === this.selectedItem);

      if (filteredItem.length === 0) {
        this.userArr = onCompare(this.items, this.isSetBreast, this.isSetWaist, this.isSetHips);
      }
      this.userArr = onCompare(filteredItem, this.isSetBreast, this.isSetWaist, this.isSetHips);

      this.$store.commit('setFilteredDresses', this.userArr);
      this.$store.commit('setLoading', true);

      this.$router.push('/result');
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
    isShowSingleCompare() {
      return this.$store.getters.selectedItem !== null && this.$store.getters.selectedItem !== '';
    },
  },
};

</script>


<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
