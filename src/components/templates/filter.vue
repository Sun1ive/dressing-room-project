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
            :label="itemType"></v-switch>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchState: null,
    }
  },
  methods: {
    onSwitch() {
      switch (this.itemType) {
        case 'Плечевые':
          this.$store.commit('runCompareBottom', this.$store.getters.items.filter(item => item.type === 'Поясные'));
          break;
        case 'Поясные':
          this.$store.commit('runCompare', this.$store.getters.items.filter(item => item.type === 'Плечевые'));
        default: break;
      }
    }
  },
  computed: {
    itemType() {
      return this.$store.getters.filtered.map(item => item.type)[0]
    }
  }
};
</script>

<style scoped>

</style>