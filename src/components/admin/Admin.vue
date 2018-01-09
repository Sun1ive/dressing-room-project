<template>
  <v-container>
    <app-bar />
      <v-container fluid>
        <v-layout
          justify-center
          align-center
        >
          <transition 
            name="fade" 
            mode="out-in">
            <router-view />
          </transition>
        </v-layout>
      </v-container>
  </v-container>
</template>

<script>
import Bar from './AdminBar'

export default {
  components: {
    appBar: Bar
  }
};
</script>

<style scoped>

</style>