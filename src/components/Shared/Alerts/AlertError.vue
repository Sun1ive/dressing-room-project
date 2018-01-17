<template>
  <v-layout justify-center align-center >
    <v-flex xs10 sm6 lg4>
      <v-alert
        color="error"
        icon="warning"
        value="true"
      >
        <slot/>
      </v-alert>
    </v-flex>    
  </v-layout>
</template>
