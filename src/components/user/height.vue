<template>
  <wrapper>
    <v-card-text slot="text">Охват бедер {{ Height }} см</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="150" thumb-label :max="200" v-model="Height"></v-slider>
    </v-card-text>
    <v-btn slot="button" @click="onSave">Сохранить</v-btn>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      height: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setHeight', this.getHeight);
      this.$router.push('/params');
    },
  },
};
</script>
