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
                <v-list two-line subheader>
                  <v-flex xs10 offset-xs1>
                    <v-select
                      :items="avaliableBrands"
                      v-model="selectedBrand"
                      label="Бренд"
                      @input="findByBrand"
                    />
                  </v-flex>
                </v-list> 
                <v-divider />
                <v-list two-line subheader>
                  <v-subheader>Цвета</v-subheader>
                  <v-list-tile avatar v-for="color in itemsByColor" :key="color">
                    <v-radio-group v-model="selectedColor">
                      <v-radio :label="color" :value="color"></v-radio>
                    </v-radio-group>
                  </v-list-tile>
                  <v-divider />
                </v-list>
           <!--      <v-list>
                  <v-flex class="text-xs-center"><div>От {{ minPrice }} грн</div></v-flex>
                    <v-list-tile>
                      <v-flex xs10 offset-xs1>
                        <v-slider 
                          v-model="selectedPrice"
                          step="10"
                          :min="minPrice"
                          :max="maxPrice"
                          thumb-label
                        ></v-slider>
                      </v-flex>
                    </v-list-tile>
                    <v-flex class="text-xs-center"><div>До {{ maxPrice }} грн</div></v-flex>
                </v-list> -->
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
          <v-alert
            color="error" 
            icon="warning" 
            value="true"
            v-else
          >
            Шота не пошло
          </v-alert>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import uniq from 'lodash/uniq';
import Results from '../Shared/Results';

export default {
  components: {
    'app-results': Results,
  },
  data() {
    return {
      selectedColor: null,
      selectedType: null,
      selectedBrand: null,
      selectedPrice: null,
    };
  },
  computed: {
    ...mapGetters(['items', 'isLoading', 'availableItemTypes']),
    itemsByColor() {
      if (this.selectedBrand) {
        return uniq(
          this.items.filter(item => item.brand === this.selectedBrand).map(item => item.color),
        );
      }
      return uniq(this.items.map(item => item.color));
    },
    avaliableBrands() {
      return this.items.map(item => item.brand);
    },
    /* pricePool() {
      if (this.selectedColor) {
        return uniq(this.filteredItems.map(item => item.price));
      }
      return uniq(this.items.map(item => item.price));
    },
    minPrice() {
      return this.pricePool.reduce((prev, curr) => Math.min(prev, curr));
    },
    maxPrice() {
      return this.pricePool.reduce((prev, curr) => Math.max(prev, curr));
    }, */
    filteredItems() {
      if (this.selectedColor) {
        let arr = this.items.filter(item => item.color === this.selectedColor);
        if (this.selectedBrand) {
          return arr.filter(item => item.brand === this.selectedBrand);
        }
        return arr;
      }
      if (this.selectedBrand) {
        return this.items.filter(item => item.brand === this.selectedBrand);
      }
      /* if (this.selectedPrice) {
        return this.items.filter(item => item.price >= this.selectedPrice);
      } */
      return this.items;
    },
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'setItemType']),
    ...mapActions(['compareProductsWithType']),
    async checkAll() {
      this.reset();
      this.setSelectedItem(null);
      await this.compareProductsWithType();
    },
    async findByType() {
      this.setItemType(this.selectedType);
      if (this.selectedColor) {
        this.selectedColor = null;
      }
      await this.compareProductsWithType();
    },
    async findByBrand() {
      // this.reset();
    },
    reset() {
      this.selectedColor = null;
      this.selectedType = null;
      this.selectedBrand = null;
      this.selectedPrice = null;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>