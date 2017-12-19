<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <slot name="text"></slot>
          <slot name="size"></slot>
          <slot name="slider"></slot>
          <v-card-actions>
            <slot name="button"></slot>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
