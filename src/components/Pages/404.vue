<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>404</h1>
        <p>{{ errorMessage }}</p>
        <img src="http://memesmix.net/media/created/c04bqw.jpg" alt="">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.items;
    },
    errorMessage() {
      let message;
      if (this.items.length < 1) {
        message = 'К сожалению на Вас не нашли вещей, очень сложно'
      }
      message = 'К сожалению у нас в базе нет такой вещи'
      return message;
    }
  }
}
</script>


<style scoped>
</style>