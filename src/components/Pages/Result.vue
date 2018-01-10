<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center v-if="!isLoading">
      <v-flex xs10 sm6 md4 lg3 v-for="item in items" :key="item._id">
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
            v-if="items.length === 1">Посмотреть все</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <app-loader v-if="isLoading" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['items', 'isLoading']),
  },
  methods: {
    checkAll() {
      this.$store.dispatch('compareAll');
    },
  },
};
</script>

<style scoped>

</style>