<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Охват бедер {{ hips }} см
          </v-card-text>
          <v-card-text>Размер: {{ getHipsSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="90" thumb-label :max="105" v-model="hips"></v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./Hips"></script>

<style scoped lang="stylus"></style>