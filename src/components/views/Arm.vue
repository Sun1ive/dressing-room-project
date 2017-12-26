<template>
  <wrapper>
    <v-card-text slot="text">Охват груди {{ getArm }} см</v-card-text>
    <v-card-text slot="size">Размер: {{ getArmSize }}</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="18" thumb-label :max="50" v-model="arm"></v-slider>
    </v-card-text>
    <v-btn slot="button" @click="onSave">Сохранить</v-btn>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      arm: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setArm', this.arm);
      this.$router.push('/params');
    },
  },
  computed: {
    getArm() {
      return this.arm;
    },
    getArmSize() {
      const params = {
        number: null,
        size: null,
      };

      const x = this.getArm;

      if (x >= 18 && x < 22) {
        params.number = x;
        params.size = 'XS';
      }
      if (x > 21 && x < 25) {
        params.number = x;
        params.size = 'S';
      }
      if (x > 24 && x < 28) {
        params.number = x;
        params.size = 'M';
      }
      if (x > 27 && x <= 31) {
        params.number = x;
        params.size = 'L';
      }

      return params.size;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card__media
  margin 0 auto
</style>
