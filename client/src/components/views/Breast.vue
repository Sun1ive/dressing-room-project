<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Охват груди {{ getBreast }} см
          </v-card-text>
          <v-card-text>Размер: {{ getBreastSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="82" thumb-label :max="97" v-model="breast"></v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      breast: null,
    }
  },
  computed: {
    getBreast() {
      return this.breast
    },
    getBreastSize() {
      let size = null;
      if (this.getBreast >= 82 && this.getBreast < 86) {
        size = 'XS'
      }
      if (this.getBreast > 85 && this.getBreast < 90) {
        size = 'S'
      }
      if (this.getBreast > 89 && this.getBreast < 94) {
        size = 'M'
      }
      if (this.getBreast > 93 && this.getBreast <= 97) {
        size = 'L'
      }
      this.$emit('setBreast', size);
      return size
    }
  }
};
</script>

<style scoped lang="stylus"></style>