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
                    >
                    </v-select>
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
                  <v-btn @click="checkAll">Сбросить</v-btn>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12>
        <v-container fluid grid-list-xl v-if="filteredItemsByColor.length < 1">
          <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item._id">
              <v-card>
                <v-card-media height="600" :src="item.src" />
                <v-card-text>
                  <div><strong>{{ item.title }}</strong></div>
                  <div>Коэффициент совместимости: <strong>{{ item.percent }} %</strong></div>
                  <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
                  <div>Длинна: <strong>{{ item.difference }}</strong></div>
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
          </v-layout>
        </v-container>
        <v-container fluid grid-list-xl v-else>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md4 lg3 v-for="item in filteredItemsByColor" :key="item._id">
              <v-card>
                <v-card-media height="600" :src="item.src" />
                <v-card-text>
                  <div><strong>{{ item.title }}</strong></div>
                  <div>Коэффициент совместимости: <strong>{{ item.percent }} %</strong></div>
                  <div>Ваш предпочитаемый размер: <strong>{{ item.size }}</strong></div>
                  <div>Длинна: <strong>{{ item.difference }}</strong></div>
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
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import uniq from 'lodash/uniq';

export default {
  data() {
    return {
      selectedColor: null,
      selectedType: null,
    };
  },
  computed: {
    ...mapGetters(['items', 'isLoading', 'availableItemTypes']),
    itemsByColor() {
      return uniq(this.$store.getters.items.map(item => item.color));
    },
    filteredItemsByColor() {
      return this.items.filter(item => item.color === this.selectedColor);
    }
  },
  methods: {
    async checkAll() {
      this.selectedColor = null;
      this.selectedType = null;
      await this.$store.dispatch('compareProductsWithType');
    },
    async findByType() {
      this.$store.commit('setItemType', this.selectedType);
      await this.$store.dispatch('compareProductsWithType');
    }
  },
};
</script>

<style scoped lang="stylus">
</style>