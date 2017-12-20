<template>
  <v-container fluid>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>Узнайте свой размер</h1>
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
        to="/waist">Обхват талии</v-btn>
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
        to="/hips">Обхват бедер</v-btn>
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
        <v-btn v-if="isShowSingleCompare" :disabled="!isReady" @click="singleCheck">Посмотреть</v-btn>
        <v-btn v-else @click="check">Посмотреть</v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>


<script>
import { each } from 'lodash';

export default {
  methods: {
    check() {
      const myArr = [];

      each(this.items, item => {
        each(item.sizes, x => {
          const itemID = item.id;
          if (
            this.isSetBreast <= x.breast &&
            this.isSetWaist <= x.waist &&
            this.isSetHips <= x.hips
          ) {
            if (myArr.length <= 0) {
              myArr.push({
                title: item.title,
                src: item.src,
                id: item.id,
                link: item.link,
                size: x.size,
              });
            }
            const id = myArr[myArr.length - 1].id;
            if (myArr.length > 0) {
              if (id !== itemID) {
                myArr.push({
                  title: item.title,
                  src: item.src,
                  link: item.link,
                  id: item.id,
                  size: x.size,
                });
              }
            }
          }
        });

        this.$store.commit('setFilteredDresses', myArr);
        this.$router.push('/result');
      });
    },
    singleCheck() {
      const localData = {
        breast: this.isSetBreast,
        waist: this.isSetWaist,
        hips: this.isSetHips,
      };
      localStorage.setItem('DressingUserData', JSON.stringify(localData));

      const filteredItem = this.items.filter(item => item.link === this.selectedItem);
      console.log(filteredItem);
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
    isReady() {
      return this.isSetBreast !== null && this.isSetWaist !== null && this.isSetHips !== null;
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
