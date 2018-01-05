<template>
  <v-container id="container" fluid grid-list-xl>
    <v-layout justify-center align-center row wrap v-if="!isLoading">
      <v-flex xs12 sm6 lg3 v-for="(item, i) in filtered" :key="i">
        <v-card>
          <v-card-media height="350" :src="item.src"></v-card-media>
          <v-card-text>
            <div>Коэффициент {{ item.percent }} %</div>
            <div class="mb-2">{{ item.title }}</div>
            <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
            <div>Длинна: <strong>{{ item.knee }}</strong></div>
          </v-card-text>
          <v-card-actions>
            <v-btn :href="`${item.link}`" target="_blank">Посмотреть</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center v-if="!isLoading">
      <v-flex class="text-xs-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          @input="showItems"
        ></v-pagination>
      </v-flex>
    </v-layout>
    <AppLoader v-if="isLoading" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      visibleResult: [],
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
  created() {
    setTimeout(() => {
      this.$store.commit('setLoading', false);
    }, 1000);
    this.updateVisibleItems();
  },
};
</script>

<style lang="stylus" scoped>
.card__text {
  min-height: 200px !important;
}

#container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

