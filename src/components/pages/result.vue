<template>
  <v-container grid-list-xl fluid>
    
    <v-layout>
      <v-flex xs4>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti reiciendis mollitia cupiditate dolore officia tempora, magni ea. Aut, possimus blanditiis! Unde consectetur esse aut perferendis cum et a enim praesentium eos, incidunt modi ex laborum dolorum iusto. Autem at, corrupti repellat accusamus dicta beatae voluptates commodi nam temporibus distinctio.</h1>
      </v-flex>
      <v-flex xs10 lg3 v-for="(item, i) in filtered" :key="i">
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
export default {
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
  created() {
    setTimeout(() => {
      this.$store.commit('setLoading', false);
    }, 1000);
    this.updateVisibleItems();
  },
};
</script>

<style lang="stylus" scoped>
.card__text
  min-height: 200px !important;

</style>

