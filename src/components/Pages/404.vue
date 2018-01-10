<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>¯\_(ツ)_/¯</h1>
        <p>{{ errorMessage }}</p>
        <p>Попробуйте изменить Ваши значения</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      items: 'items',
    }),
    errorMessage() {
      if (this.items.length < 1) {
        return 'К сожалению под Ваши параметры не подходит ни один товар'
      }
    }
  },
};
</script>


<style scoped>

</style>