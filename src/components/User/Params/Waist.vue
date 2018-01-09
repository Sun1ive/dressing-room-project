<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <v-card-text>Охват талии {{ waist }} см</v-card-text>
          <v-card-text>Размер: {{ getWaistSize }}</v-card-text>
          <v-card-text>
            <v-slider :min="63" thumb-label :max="77" v-model="waist"
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
      waist: null,
    };
  },
  methods: {
    onSave() {
      this.$store.commit('setUserParams', {
        name: 'Waist',
        value: this.waist,
      });
      this.$router.push('/');
    },
  },
  computed: {
    getWaistSize() {
      const params = {
        size: null,
        number: null,
      };
      const z = this.waist;

      if (z >= 63 && z < 67) {
        params.size = 'XS';
        params.number = z;
      }
      if (z > 66 && z < 71) {
        params.size = 'S';
        params.number = z;
      }
      if (z > 70 && z < 75) {
        params.size = 'M';
        params.number = z;
      }
      if (z > 74 && z <= 77) {
        params.size = 'L';
        params.number = z;
      }

      return params.size;
    },
  },
  created() {
    if (this.$store.getters.userWaist) {
      this.waist = this.$store.getters.userWaist;
    }
  },
};
</script>

<style scoped>

</style>