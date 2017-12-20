<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(item, i) in filtered" :key="i">
        <v-card>
          <v-card-media height="300" :src="item.src"></v-card-media>
          <v-card-text>
            <div class="mb-2">{{ item.title }}</div>
            <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
          </v-card-text>
          <v-card-actions>
            <v-btn :href="item.link" target="_blank">Перейти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    filtered() {
      return this.$store.getters.filtered;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card__text
  min-height 200px !important
</style>

