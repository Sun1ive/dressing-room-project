<template>
  <wrapper>
    <v-card-text slot="text">Охват бедер {{ hips }} см</v-card-text>
    <v-card-text slot="size">Размер: {{ getHipsSize }}</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="90" thumb-label :max="105" v-model="hips"></v-slider>
    </v-card-text>
  </wrapper>
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
      const params = {
        size: null,
        number: null,
      };
      if (this.getHips >= 90 && this.getHips <= 93) {
        params.size = 'XS';
        params.number = this.getHips;
      }
      if (this.getHips >= 94 && this.getHips <= 97) {
        params.size = 'S';
        params.number = this.getHips;
      }
      if (this.getHips >= 98 && this.getHips <= 101) {
        params.size = 'M';
        params.number = this.getHips;
      }
      if (this.getHips >= 102 && this.getHips <= 105) {
        params.size = 'L';
        params.number = this.getHips;
      }

      // this.$store.commit('setHips', params);
      this.$emit('setHips', params);
      return params.size;
    },
  },
};
</script>

<style scoped lang="stylus"></style>