<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Охват груди {{ getBreast }} см
          </v-card-text>
          <v-card-text>Размер: {{ getBreastSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="82" thumb-label :max="97" v-model="breast"></v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./Breast"></script>

<style scoped lang="stylus"></style>