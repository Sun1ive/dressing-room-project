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
            <!-- <v-list-tile @click="filterByType(item)" v-for="item in itemTypes" :key="item">
              <v-list-tile-content>
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            -->
            <v-flex xs10 offset-xs1>
              <v-select
              :items="itemTypes"
              v-model="selectedType"
              >
              </v-select>
            </v-flex>
          </v-list> 
          <v-divider></v-divider>
          <v-list two-line subheader>
            <v-subheader>Цвета</v-subheader>
            <v-list-tile avatar v-for="color in colorsByType" :key="color">
              <!-- <v-checkbox 
                :label="color" 
                :value="color" 
                v-model="selectedColor"
              ></v-checkbox> -->
              <v-radio-group v-model="selectedColor" :mandatory="false">
                <v-radio :label="color" :value="color"></v-radio>
              </v-radio-group>
            </v-list-tile>
          </v-list>
          <v-btn @click="sendRequest">Click me</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import uniq from 'lodash/uniq';

export default {
  data() {
    return {
      selectedColor: null,
      selectedType: 'Плечевые',
    };
  },
  methods: {
    async sendRequest() {
      this.$store.commit('setLoading', true);
      this.$store.commit('setItemType', this.selectedType);
      await this.$store.dispatch('compareProductsWithTypeAndColor');
      this.$store.commit('setLoading', false);
    },
  },
  computed: {
    itemTypes() {
      return this.$store.getters.availableItemTypes;
    },
    colorsByType() {
      return uniq(this.$store.getters.items.map(item => item.color));
    },
  },
  mounted() {
    if (this.$store.getters.availableItemTypes.length < 1) {
      this.$store.commit('setAvailableItemTypes',uniq(this.$store.getters.items.map(item => item.type)));
    }
  },
};
</script>

<style scoped lang="stylus">
.filterActions {
  justify-content: center;
}
</style>