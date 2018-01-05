<template>
  <v-container fluid>
    
    <v-layout row>
      <v-layout class="mt-5" id="one">
        <v-flex xs10>
          <app-switch></app-switch>
        </v-flex>
      </v-layout>
      <v-container grid-list-xl>
        <v-layout wrap>
        <v-flex xs10 lg4 v-for="(item, i) in filtered" :key="i">
          <v-card>
            <v-card-media :height="picHeight" :src="item.src"></v-card-media>
            <v-card-text>
              <div>Коэффициент {{ item.percent }} %</div>
              <div class="mb-2">{{ item.title }}</div>
              <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
              <div>Длинна: <strong>{{ item.difference }}</strong></div>
            </v-card-text>
            <v-card-actions>
              <v-btn :href="`${item.link}`" target="_blank">Посмотреть</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
    </v-layout>




  <!--   <v-layout justify-center align-center v-if="!isLoading">
      <v-flex class="text-xs-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          @input="showItems"
        ></v-pagination>
      </v-flex>
    </v-layout>


    <AppLoader v-if="isLoading" /> -->


  </v-container>
</template>

<script>
import mySwitch from '../templates/filter';

export default {
  components: {
    'app-switch': mySwitch
  },
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      visibleResult: [],
      picHeight: 500,
    };
  },
  computed: {
    filtered() {
      return this.$store.getters.filtered;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    totalPages() {
      return Math.ceil(this.filtered.length / this.perPage - 1);
    },
    sliceFrom() {
      return this.currentPage * this.perPage;
    },
  },
  methods: {
    showItems(currentPage) {
      this.currentPage = currentPage;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleResult = this.filtered.slice(this.sliceFrom, this.sliceFrom + this.perPage);
    },
  },
/*   created() {
    setTimeout(() => {
      this.$store.commit('setLoading', false);
    }, 1000);
    this.updateVisibleItems();
  }, */
};
</script>

<style lang="stylus" scoped>
.card__text
  min-height: 200px !important;


#one
  min-width 25%
</style>

