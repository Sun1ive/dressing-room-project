<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center justify-center wrap>
      <v-flex xs12 sm6 lg3 v-for="item in getLoadedItems" :key="item.name">
        <v-card>
          <v-card-text>
            <div>{{ item.title }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  computed: {
    getLoadedItems() {
      return this.$store.getters.items;
    }
  }
};
</script>

<style scoped>

</style>
