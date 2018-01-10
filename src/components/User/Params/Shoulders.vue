<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <v-card-text>Плечи {{ shoulders }} см</v-card-text>
          <v-card-text >Размер: {{ getShouldersSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="34" thumb-label :max="45" v-model="shoulders"
            ></v-slider>
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
      shoulders: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setUserParams', {
        name: 'Shoulders',
        value: this.shoulders,
      });
      this.$router.push('/');
    },
  },
  computed: {
    getShouldersSize() {
      const params = {
        size: null,
        number: null,
      };
      const z = this.shoulders;

      if (z >= 30 && z <= 34) {
        params.size = 'XS';
        params.number = z;
      }
      if (z > 34 && z <= 38) {
        params.size = 'S';
        params.number = z;
      }
      if (z > 38 && z <= 42) {
        params.size = 'M';
        params.number = z;
      }
      if (z > 42 && z <= 46) {
        params.size = 'L';
        params.number = z;
      }

      return params.size;
    },
  },
  created() {
    if (this.$store.getters.userShoulders) {
      this.shoulders = this.$store.getters.userShoulders;
    }
  },
};
</script>


<style scoped>

</style>