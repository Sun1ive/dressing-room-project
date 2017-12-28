<template>
  <v-container fluid grid-list-xl>
    <v-layout justify-center align-center row wrap v-if="!isLoading">
      <v-flex xs12 sm6 md4 lg2 v-for="(item, i) in filtered" :key="i">
        <v-card>
          <v-card-media height="500" :src="item.src"></v-card-media>
          <v-card-text>
            <div>Коэффициент {{ item.percent }} %</div>
            <div class="mb-2">{{ item.title }}</div>
            <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
          </v-card-text>
          <v-card-actions>
            <v-btn :href="`${item.link}?attribute_pa_size=${item.size}`" target="_blank">Посмотреть</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <AppLoader v-if="isLoading" />
  </v-container>
</template>

<script>
export default {
  computed: {
    filtered() {
      return this.$store.getters.filtered;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  created() {
    setTimeout(() => {
      this.$store.commit('setLoading', false);
    }, 3000);
  },
};
</script>

<style lang="stylus" scoped>
.card__text {
  min-height: 200px !important;
}
</style>

