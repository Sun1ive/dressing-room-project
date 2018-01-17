<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <v-card-text>Охват бедер {{ hips }} см</v-card-text>
          <v-card-text>Размер: {{ getHipsSize }}</v-card-text>
          <v-card-text>
            <v-slider
              :min="90" 
              thumb-label 
              :max="105" 
              v-model="hips"
            />
            <v-btn @click="onSave">Сохранить</v-btn>
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
    if (this.$store.getters.userHips) {
      this.hips = this.$store.getters.userHips;
    }
  },
  methods: {
    onSave() {
      this.$store.commit('setUserParams', {
        name: 'Hips',
        value: this.hips,
      });
      this.$router.push('/');
    },
  },
  
};
</script>

<style scoped>

</style>