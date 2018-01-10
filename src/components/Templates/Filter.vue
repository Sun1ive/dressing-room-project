<template>
  <v-container fluid>
    <v-layout justify-center class="mt-4" row>
    <v-flex xs10>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>Фильтр</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader>Классификация</v-subheader>
          <v-list-tile @click="filterByType(item)" v-for="item in itemTypes" :key="item">
            <v-list-tile-content>
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Цвета</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox label="1234" v-model="video"></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import uniq from 'lodash/uniq'

export default {
  data() {
    return {
      selectedColor: [],
    };
  },
  methods: {
    async filterByType(item) {
      this.$store.commit('setLoading', true);
      this.$store.commit('setItemType', item);
      await this.$store.dispatch('compareAll');
      this.$store.commit('setLoading', false);
    },
  },
  computed: {
    itemTypes() {
      return this.$store.getters.availableItemTypes;
    },
  },
  mounted() {
    if (this.$store.getters.availableItemTypes.length < 1) {
      this.$store.commit('setAvailableItemTypes', uniq(this.$store.getters.items.map(item => item.type)));
    }
  },
};
</script>

<style scoped lang="stylus">
.filterActions {
  justify-content: center;
}
</style>