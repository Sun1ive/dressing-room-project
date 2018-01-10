<template>
  <v-container>
    <v-layout class="mt-4" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
          <v-card-text>Фильтр</v-card-text>
          <v-btn 
          @click="changeState"
          class="mb-3">Click me</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    changeState() {
      this.$emit('changeState');
    },
  },
};
</script>

<style scoped>

</style>