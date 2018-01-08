<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>This is a Admin page!</h1>
        <p>это надо все переписать</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
</style>