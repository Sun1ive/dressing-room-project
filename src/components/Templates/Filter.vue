<template>
  <v-container fluid>
    <v-layout class="mt-4" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
          <v-card-title>
            <v-flex class="text-xs-center">
              <h1>Классификация</h1>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-select
              :items="itemTypes"
              v-model="selectedType"
              :label="itemTypes[0]"
            ></v-select>
          </v-card-text>
          <v-card-actions class="filterActions">
            <v-btn @click="filterByType">Применить</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
        <h1>Цвета</h1>
          <v-card-text>
            <!-- <v-checkbox
              v-for="(color, i) in itemsColors"
              :key="i"
              :label="color"
              v-model="selectedColors"
              :value="color"
            ></v-checkbox> -->
          </v-card-text>
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
      selectedType: null,
    };
  },
  methods: {
    async filterByType() {
      this.$store.commit('setLoading', true);
      this.$store.commit('setItemType', this.selectedType);
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