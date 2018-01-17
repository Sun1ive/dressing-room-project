<template>
  <v-container fluid>
    <v-container fluid v-if="isLoading">
      <app-loader />
    </v-container>
    <v-container fluid v-if="!isLoading">
      <v-layout>
        <v-flex xs6 sm3 v-if="items.length > 1">
          <v-container fluid>
            <v-layout justify-center class="mt-4" row>
              <v-flex xs10>
                <v-card>
                  <v-toolbar color="teal" dark>
                    <v-toolbar-title>Фильтр</v-toolbar-title>
                  </v-toolbar>
                  <v-list two-line subheader>
                    <v-flex xs10 offset-xs1>
                      <v-select
                        :items="availableItemTypes"
                        v-model="selectedType"
                        label="Классификация"
                        @input="findByType"
                      />
                    </v-flex>
                  </v-list> 
                  <v-divider />
                  <v-list two-line subheader>
                    <v-subheader>Цвета</v-subheader>
                    <v-list-tile avatar v-for="color in itemsByColor" :key="color">
                      <v-radio-group v-model="selectedColor">
                        <v-radio :label="color" :value="color" />
                      </v-radio-group>
                    </v-list-tile>
                    <v-divider />
                  </v-list>
                  <v-btn @click="checkAll">Сбросить</v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12>
          <v-container fluid grid-list-xl>
            <app-results 
              @checkAll="checkAll" 
              :filtered="filteredItems"
              v-if="filteredItems.length > 0"
            />
            <app-error v-else>
              Something bad happenned
            </app-error>
          </v-container>
          <v-container>
            <v-layout justify-center align-center>
              <v-btn color="primary" @click="loadMore">sad</v-btn>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import uniq from 'lodash/uniq';
import Results from '../Shared/Results';
import AlertError from '../Shared/Alerts/AlertError';

export default {
  components: {
    'app-results': Results,
    'app-error': AlertError,
  },
  data() {
    return {
      selectedColor: null,
      selectedType: null,
    };
  },
  computed: {
    ...mapGetters(['items', 'availableItemTypes', 'isLoading']),
    itemsByColor() {
      return uniq(this.items.map(item => item.color));
    },
    filteredItems() {
      if (this.selectedColor) {
        return this.items.filter(item => item.color === this.selectedColor);
      }
      return this.items;
    },
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'setItemType', 'setLoading']),
    ...mapActions(['compareProductsWithType', 'getItemsByPartsAndType']),
    async checkAll() {
      this.setLoading(true);
      this.reset();
      this.setSelectedItem(null);
      this.setItemType('Плечевые');
      await this.compareProductsWithType();
      this.setLoading(false);
    },
    async findByType() {
      this.setLoading(true);
      this.setItemType(this.selectedType);
      if (this.selectedColor) {
        this.selectedColor = null;
      }
      await this.compareProductsWithType();
      this.setLoading(false);
    },
    reset() {
      this.selectedColor = null;
      this.selectedType = null;
    },
    loadMore() {
      this.getItemsByPartsAndType(this.page);
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
