<template>
  <v-container fluid class="home">
    <v-layout justify-center align-end>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>Добро пожаловать в онлайн примерочную</h1>
        <p>Здесь вы можете примерить на себе конкретную вещь или же все вещи из нашей базы.</p>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-start>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn
        color="primary"
        to="/params"
        >Начать</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
.layout
  min-height 30vh
</style>

