<template>
  <wrapper>
    <v-card-text slot="text">Охват талии {{ waist }} см</v-card-text>
    <v-card-text slot="size">Размер: {{ getWaistSize }}</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="63" thumb-label :max="77" v-model="waist"></v-slider>
    </v-card-text>
    <v-btn slot="button" @click="onSave">Сохранить</v-btn>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      waist: null,
    };
  },
  methods: {
    onSave() {
    }
  },
  computed: {
    getWaist() {
      return this.waist;
    },
    getWaistSize() {
      const params = {
        size: null,
        number: null,
      };
      if (this.getWaist >= 63 && this.getWaist < 67) {
        params.size = 'XS';
        params.number = this.getWaist;
      }
      if (this.getWaist > 66 && this.getWaist < 71) {
        params.size = 'S';
        params.number = this.getWaist;
      }
      if (this.getWaist > 70 && this.getWaist < 75) {
        params.size = 'M';
        params.number = this.getWaist;
      }
      if (this.getWaist > 74 && this.getWaist <= 77) {
        params.size = 'L';
        params.number = this.getWaist;
      }
      // this.$store.commit('setWaist', params);
      this.$emit('setWaist', params);

      return params.size;
    },
  },
};
</script>

<style scoped lang="stylus"></style>
