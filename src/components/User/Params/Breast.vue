<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <v-card-text>Охват груди {{ breast }} см</v-card-text>
          <v-card-text >Размер: {{ getBreastSize }}</v-card-text>
          <v-card-text>
            <v-slider 
              :min="82"
              thumb-label
              :max="97"
              v-model="breast"
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
      breast: null,
    };
  },
  computed: {
    getBreastSize() {
      const params = {
        number: null,
        size: null,
      };
      const x = this.breast;

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
  mounted() {
    if (this.$store.getters.userBreast) {
      this.breast = this.$store.getters.userBreast;
    }
  },
  methods: {
    onSave() {
      this.$store.commit('setUserParams', {
        name: 'Breast',
        value: this.breast,
      });
      this.$router.push('/');
    },
  },
};
</script>

<style lang="stylus" scoped>
.card__media {
  margin: 0 auto;
}
</style>


<style scoped>

</style>
