<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <slot name="head"></slot>
          <slot name="params"></slot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
