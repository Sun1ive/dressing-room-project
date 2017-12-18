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
        to="/breast">Обхват груди</v-btn>
      </v-flex>
    </v-layout>

    <paramsWrapper v-if="isSetBreast">
      <v-card-text slot="params">{{ isSetBreast }} см</v-card-text>
    </paramsWrapper>


    <v-layout justify-center v-if="!isSetWaist">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/waist">Обхват талии</v-btn>
      </v-flex>
    </v-layout>

    <paramsWrapper v-if="isSetWaist">
      <v-card-text slot="params">{{ isSetWaist }} см</v-card-text>
    </paramsWrapper>

    <v-layout justify-center v-if="!isSetHips">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/hips">Обхват бедер</v-btn>
      </v-flex>
    </v-layout>

    <paramsWrapper v-if="isSetHips">
      <v-card-text slot="params">{{ isSetHips }} см</v-card-text>
    </paramsWrapper>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn v-if="isReady" @click="check">Посмотреть</v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>


<script>
import { each } from 'lodash';

export default {
  methods: {
    check() {
      const data = this.$store.state.items;
      const breast = this.$store.getters.getBreast;
      const waist = this.$store.getters.getWaist;
      const hips = this.$store.getters.getHips;

      const localData = {
        breast,
        waist,
        hips,
      };
      const storage = JSON.stringify(localData);

      localStorage.setItem('DressingUserData', storage);

      const myArr = [];

      each(data, item => {
        each(item.sizes, x => {
          const itemID = item.id;
          if (breast <= x.breast && waist <= x.waist && hips <= x.hips) {
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
  },
  computed: {
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
      return this.isSetHips !== null && this.isSetWaist !== null && this.isSetBreast !== null;
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
