<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm4 offset-sm4 class="my-1">
        <v-card class="text-xs-center">
          <slot name="head"></slot>
          <slot name="params"></slot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
