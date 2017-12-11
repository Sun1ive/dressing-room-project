<template>
  <v-container>
    <v-layout class="my-3" align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Охват талии {{ waist }} см
          </v-card-text>
          <v-card-text>Размер: {{ getWaistSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="63" thumb-label :max="77" v-model="waist"></v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./Waist"></script>

<style scoped lang="stylus"></style>