<template>
  <v-container :fluid="fluid">
    <v-layout :align-center="alignCenter" :justify-center="justifyCenter">
      <v-flex xs12 sm6 lg3 class="text-xs-center">
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
    justifyCenter: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
  },
};
</script>