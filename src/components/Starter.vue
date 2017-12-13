<template>
  <v-container fluid>
      
    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>Узнайте свой размер</h1>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn color="primary" to="/breast">Обхват груди</v-btn>
      </v-flex>
    </v-layout>
    
    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn color="primary" to="/waist">Обхват талии</v-btn>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn color="primary" to="/hips">Обхват бедер</v-btn>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>