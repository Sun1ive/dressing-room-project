<template>
  <div>
    <v-layout justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
          <v-card-title>
            <v-flex class="text-xs-center">
              <h1>Фильтр</h1>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-switch
              @change="onSwitch"
              v-model="switchState"
              :label="itemType"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
        <h1>Цвета</h1>
          <v-card-text>
            <v-checkbox
              v-for="color in itemsColors"
              :key="color"
              :label="color"
              v-model="selectedColors"
              :value="color"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      switchState: null,
      selectedColors: [],
      filteredByColor: [],
    };
  },
  methods: {
    onSwitch() {
      switch (this.itemType) {
        case 'Плечевые':
          this.$store.commit(
            'runCompareBottom',
            this.items.filter(item => item.type === 'Поясные'),
          );
          break;
        case 'Поясные':
          this.$store.commit('runCompare', this.items.filter(item => item.type === 'Плечевые'));
        default:
          break;
      }
    },
  },
  computed: {
    ...mapGetters(['items', 'filtered']),
    itemType() {
      return this.filtered.map(item => item.type)[0];
    },
    itemsColors() {
      return this.filtered.map(item => item.color);
    },
  },
  watch: {
    selectedColors(val) {
      this.filteredByColor = this.filtered.filter(item => item.color === val.toString())
    },
  },
};
</script>

<style scoped>

</style>