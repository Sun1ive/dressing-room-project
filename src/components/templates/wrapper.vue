<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 lg3 class="text-xs-center">
        <v-card>
          <slot name="pic"></slot>
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