<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Охват бедер {{ hips }} см
          </v-card-text>
          <v-card-text>Размер: {{ getHipsSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="90" thumb-label :max="105" v-model="hips"></v-slider>
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
      hips: null,
    };
  },
  computed: {
    getHips() {
      return this.hips;
    },
    getHipsSize() {
      let size = null;
      if (this.getHips >= 90 && this.getHips < 94) {
        size = 'XS';
      }
      if (this.getHips > 93 && this.getHips < 98) {
        size = 'S';
      }
      if (this.getHips > 94 && this.getHips < 102) {
        size = 'M';
      }
      if (this.getHips > 101 && this.getHips <= 105) {
        size = 'L';
      }
      this.$emit('setHips', size);
      return size;
    },
  },
};
</script>

<style scoped lang="stylus"></style>