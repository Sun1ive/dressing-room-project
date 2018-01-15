<template>
  <v-container fluid>
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
                <!-- <v-list two-line subheader>
                  <v-flex xs10 offset-xs1>
                    <v-select
                      :items="avaliableBrands"
                      v-model="selectedBrand"
                      label="Бренд"
                    />
                  </v-flex>
                </v-list> 
                <v-divider /> -->
                <v-list two-line subheader>
                  <v-subheader>Цвета</v-subheader>
                  <v-list-tile avatar v-for="color in itemsByColor" :key="color">
                    <v-radio-group v-model="selectedColor">
                      <v-radio :label="color" :value="color"></v-radio>
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
            :filteredItems="filteredItems"
            v-if="filteredItems.length > 0"
          />
          <app-error v-else>
            Something bad happenned
          </app-error>
        </v-container>
      </v-flex>
    </v-layout>
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
      // selectedBrand: null,
    };
  },
  computed: {
    ...mapGetters([
      'items',
      'availableItemTypes'
    ]),
    itemsByColor() {
      if (this.selectedBrand) {
        return uniq(this.items.filter(item => item.brand === this.selectedBrand).map(item => item.color));
      }
      return uniq(this.items.map(item => item.color));
    },
    avaliableBrands() {
      return this.items.map(item => item.brand);
    },
    filteredItems() {
      if (this.selectedColor) {
        let arr = this.items.filter(item => item.color === this.selectedColor);
        if (this.selectedBrand) {
          return arr.filter(item => item.brand === this.selectedBrand);
        }
        return arr;
      }
      return this.items;
      /*       if (this.selectedBrand) {
        return this.items.filter(item => item.brand === this.selectedBrand);
      }
      return this.items; */
    },
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'setItemType']),
    ...mapActions(['compareProductsWithType']),
    async checkAll() {
      this.reset();
      this.setSelectedItem(null);
      this.setItemType('Плечевые');
      await this.compareProductsWithType();
    },
    async findByType() {
      this.setItemType(this.selectedType);
      if (this.selectedColor) {
        this.selectedColor = null;
      }
      await this.compareProductsWithType();
    },
    reset() {
      this.selectedColor = null;
      this.selectedType = null;
      this.selectedBrand = null;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>