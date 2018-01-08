<template>
  <v-container fluid>
    
      <v-layout row wrap>

      <v-flex class="mt-4" xs10 sm3>
        <app-switch></app-switch>
      </v-flex>
      <v-flex xs10 sm9>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex xs10 lg4 v-for="(item, i) in visibleItems" :key="i">
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
      </v-flex>
      </v-layout>

     <v-layout justify-center align-center>
      <v-flex class="text-xs-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          @input="showItems"
        ></v-pagination>
      </v-flex>
    </v-layout>


   <!-- <AppLoader v-if="isLoading" /> -->


  </v-container>
</template>

<script>
import mySwitch from '../templates/filter';

import { mapGetters } from 'vuex';

export default {
  components: {
    'app-switch': mySwitch,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      picHeight: 500,
      visibleItems: [],
    };
  },
  computed: {
    ...mapGetters(['filtered', 'isLoading']),
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
      this.visibleItems = this.filtered.slice(this.sliceFrom, this.sliceFrom + this.perPage);
    },
  },
  mounted() {
    this.visibleItems = this.filtered;
    this.updateVisibleItems();
  },
  watch: {
    filtered() {
      this.visibleItems = this.filtered;
      // this.updateVisibleItems();
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
.card__text {
  min-height: 200px !important;
}

#one {
  min-width: 20%;
  margin: 0 auto;
}
</style>

