<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <slot name="head"/>
          <slot name="params"/>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <slot name="button"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
