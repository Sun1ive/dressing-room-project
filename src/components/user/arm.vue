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

      if (x >= 18 && x < 23) {
        params.number = x;
        params.size = 'XS';
      }
      if (x > 22 && x < 27) {
        params.number = x;
        params.size = 'S';
      }
      if (x > 26 && x < 31) {
        params.number = x;
        params.size = 'M';
      }
      if (x > 31 && x <= 35) {
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
