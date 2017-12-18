<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(item, i) in filtered" :key="i">
        <v-card>
          <v-card-media height="500" :src="item.src"></v-card-media>
          <v-card-text>{{ item.title }}</v-card-text>
          <v-card-text>{{ item.size }}</v-card-text>
          <v-card-actions>
            <v-btn :href="item.link">Перейти</v-btn>
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
