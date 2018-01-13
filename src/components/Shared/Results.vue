<template>
  <v-layout row wrap justify-center>
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
            @click="$emit('checkAll')"
            v-if="items.length === 1"
          >Посмотреть все</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    filteredItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>

<style scoped>

</style>