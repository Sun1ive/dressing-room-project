<template>
  <wrapper>
    <v-card-text slot="text">Охват бедер {{ hips }} см</v-card-text>
    <v-card-text slot="size">Размер: {{ getHipsSize }}</v-card-text>
    <v-card-text slot="slider">
      <v-slider :min="90" thumb-label :max="105" v-model="hips"></v-slider>
    </v-card-text>
    <v-btn slot="button" @click="onSave">Сохранить</v-btn>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      hips: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setHips', this.hips);
      this.$router.push('/');
    },
  },
  computed: {
    getHipsSize() {
      const params = {
        size: null,
        number: null,
      };

      const y = this.hips;
      if (y >= 90 && y <= 93) {
        params.size = 'XS';
        params.number = y;
      }
      if (y >= 94 && y <= 97) {
        params.size = 'S';
        params.number = y;
      }
      if (y >= 98 && y <= 101) {
        params.size = 'M';
        params.number = y;
      }
      if (y >= 102 && y <= 105) {
        params.size = 'L';
        params.number = y;
      }
      return params.size;
    },
  },
  created() {
    if (this.$store.getters.getHips) {
      this.hips = this.$store.getters.getHips;
    }
  }
};
</script>
