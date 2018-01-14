<template>
  <v-layout justify-center align-center >
    <v-flex xs10 sm6 lg4>
      <v-alert
        color="warning"
        icon="priority_high"
        value="true"
      >
        <slot></slot>
      </v-alert>
    </v-flex>    
  </v-layout>
</template>
