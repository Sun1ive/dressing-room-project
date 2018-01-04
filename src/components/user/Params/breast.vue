<template>
    <wrapper>
      <v-card-text slot="text">Охват груди {{ getBreast }} см</v-card-text>
      <v-card-text slot="size">Размер: {{ getBreastSize }}</v-card-text>
      <v-card-text slot="slider">
        <v-slider :min="82" thumb-label :max="97" v-model="breast"></v-slider>
      </v-card-text>
      <v-btn 
        slot="button" 
        @click="onSave"
      >Сохранить</v-btn>
    </wrapper>
</template>

<script>
export default {
  data() {
    return {
      breast: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setBreast', this.breast);
      this.$router.push('/params');
    },
  },
  computed: {
    getBreast() {
      return this.breast;
    },
    getBreastSize() {
      const params = {
        number: null,
        size: null,
      };

      const x = this.getBreast;

      if (x >= 82 && x < 86) {
        params.number = x;
        params.size = 'XS';
      }
      if (x > 85 && x < 90) {
        params.number = x;
        params.size = 'S';
      }
      if (x > 89 && x < 94) {
        params.number = x;
        params.size = 'M';
      }
      if (x > 93 && x <= 97) {
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
