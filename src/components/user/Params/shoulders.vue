<template>
  <wrapper>
    <v-card-text slot="text">Охват бедер {{ shoulders }} см</v-card-text>
    <v-card-text slot="size">Размер: {{ getShouldersSize }}</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="30" thumb-label :max="40" v-model="shoulders"></v-slider>
    </v-card-text>
    <v-btn slot="button" @click="onSave">Сохранить</v-btn>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      shoulders: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setShoulders', this.getShoulders);
      this.$router.push('/params');
    },
  },
  computed: {
    getShoulders() {
      return this.shoulders;
    },
    getShouldersSize() {
      const params = {
        size: null,
        number: null,
      };
      const z = this.getShoulders;

      if (z >= 30 && z <= 32) {
        params.size = 'XS';
        params.number = z;
      }
      if (z > 32 && z <= 34) {
        params.size = 'S';
        params.number = z;
      }
      if (z > 34 && z <= 36) {
        params.size = 'M';
        params.number = z;
      }
      if (z > 36 && z <= 38) {
        params.size = 'L';
        params.number = z;
      }

      return params.size;
    },
  },
};
</script>
