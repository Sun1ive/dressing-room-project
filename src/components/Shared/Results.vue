<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="fadeOut">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md4 lg3 v-for="item in filteredItems" :key="item._id">
        <v-card>
          <v-card-media height="600" :src="item.src" />
          <v-card-text id="text">
            <div><strong>{{ item.title }}</strong></div>
            <div>Коэффициент: <strong>{{ item.percent }} %</strong></div>
            <div>Ваш размер: <strong>{{ item.size }}</strong></div>
            <div>Длинна: <strong>{{ item.difference }}</strong></div>
            <div>Цена: <strong>{{ item.price }} грн</strong></div>
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
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    filteredItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['items']),
    itemType() {
      return this.items.map(item => item.type);
    }
  },
};
</script>

<style scoped lang="stylus">
#text
  min-height 180px

</style>