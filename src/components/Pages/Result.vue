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
                <v-divider></v-divider>
                <v-list two-line subheader>
                  <v-subheader>Цвета</v-subheader>
                  <v-list-tile avatar v-for="color in itemsByColor" :key="color">
                    <v-radio-group v-model="selectedColor">
                      <v-radio :label="color" :value="color"></v-radio>
                    </v-radio-group>
                  </v-list-tile>
                  <v-divider></v-divider>
                </v-list>
                <v-list>
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
                  <v-btn @click="checkAll">Сбросить</v-btn>
                </v-list>
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
                <v-divider></v-divider>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12>
        <v-container fluid grid-list-xl>
          <!-- <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md4 lg3 v-for="item in filteredItems" :key="item._id">
              <v-card>
                <v-card-media height="600" :src="item.src" />
                <v-card-text>
                  <div><strong>{{ item.title }}</strong></div>
                  <div>Коэффициент совместимости: <strong>{{ item.percent }} %</strong></div>
                  <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
                  <div>Длинна: <strong>{{ item.difference }}</strong></div>
                  <h1><b>{{ item.price }} GRN</b></h1>
                </v-card-text>
                <v-card-actions>
                  <v-btn :href="`${item.link}`" target="_blank">Купить</v-btn>
                  <v-spacer />
                  <v-btn 
                    @click="checkAll"
                    v-if="items.length === 1"
                  >Посмотреть все</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout> -->
          <app-results 
            @checkAll="checkAll" 
            :filteredItems="filteredItems" 
          />
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
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
    ...mapGetters(['items', 'isLoading', 'availableItemTypes', 'avaliableBrands']),
    itemsByColor() {
      return uniq(this.$store.getters.items.map(item => item.color));
    },
    pricePool() {
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
    },
    filteredItems() {
      if (this.selectedColor) {
        return this.items.filter(item => item.color === this.selectedColor);
      }
      if (this.selectedPrice) {
        return this.items.filter(item => item.price >= this.selectedPrice);
      }
      return this.items;
    },
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'setItemType', 'setItemBrand']),
    async checkAll() {
      this.reset();
      this.setSelectedItem(null);
      await this.$store.dispatch('compareProductsWithType');
    },
    async findByType() {
      this.reset();
      this.setItemType(this.selectedType);
      await this.$store.dispatch('compareProductsWithType');
    },
    async findByBrand() {
      this.reset();
      this.setItemBrand(this.selectedBrand);
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