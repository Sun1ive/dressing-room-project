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
        @click="singleCheck"
        >Посмотреть</v-btn>
        <v-btn
        v-else
        @click="check"
        >Посмотреть</v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>


<script>
import { each } from 'lodash';
import Compare from '@/Utils/Compare';

export default {
  data() {
    return {
      userArr: [],
    };
  },
  methods: {
    check() {
      /* each(this.items, item => {
        each(item.sizes, x => {
          const itemID = item.id;
          if (
            this.isSetBreast <= x.breast &&
            this.isSetWaist <= x.waist &&
            this.isSetHips <= x.hips
          ) {
            if (this.userArr.length <= 0) {
              this.userArr.push({
                title: item.title,
                src: item.src,
                id: item.id,
                link: item.link,
                size: x.size,
              });
            }
            const id = this.userArr[this.userArr.length - 1].id;
            if (this.userArr.length > 0) {
              if (id !== itemID) {
                this.userArr.push({
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
      }); */
      this.setLocalData();
      // this.onCompare(this.items);

      Compare(this.items, this.isSetBreast, this.isSetWaist, this.isSetHips, this.userArr);

      this.$store.commit('setFilteredDresses', this.userArr);
      this.$router.push('/result');
    },
    singleCheck() {
      this.setLocalData();
      const filteredItem = this.items.filter(item => item.link === this.selectedItem);
      if (filteredItem.length === 0) {
        Compare(this.items, this.isSetBreast, this.isSetWaist, this.isSetHips, this.userArr);
      }

      // this.onCompare(filteredItem);

      Compare(filteredItem, this.isSetBreast, this.isSetWaist, this.isSetHips, this.userArr);

      this.$store.commit('setFilteredDresses', this.userArr);
      this.$router.push('/result');

      /*  this.userArr = each(filteredItem, item => {
        const itemID = item.id;
        each(item.sizes, x => {
          if (
            this.isSetBreast <= x.breast &&
            this.isSetWaist <= x.waist &&
            this.isSetHips <= x.hips
          ) {
            if (this.userArr.length <= 0) {
              this.userArr.push({
                title: item.title,
                src: item.src,
                id: item.id,
                link: item.link,
                size: x.size,
              });
            }
            const id = this.userArr[this.userArr.length - 1].id;
            if (this.userArr.length > 0) {
              if (id !== itemID) {
                this.userArr.push({
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
      }); */
    },
    onCompare(array) {
      each(array, item => {
        each(item.sizes, x => {
          const itemID = item.id;
          if (
            this.isSetBreast <= x.breast &&
            this.isSetWaist <= x.waist &&
            this.isSetHips <= x.hips
          ) {
            if (this.userArr.length <= 0) {
              this.userArr.push({
                title: item.title,
                src: item.src,
                id: item.id,
                link: item.link,
                size: x.size,
              });
            }
            const id = this.userArr[this.userArr.length - 1].id;
            if (this.userArr.length > 0) {
              if (id !== itemID) {
                this.userArr.push({
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
      });
    },
    setLocalData() {
      const localData = {
        breast: this.isSetBreast,
        waist: this.isSetWaist,
        hips: this.isSetHips,
      };
      localStorage.setItem('DressingUserData', JSON.stringify(localData));
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
