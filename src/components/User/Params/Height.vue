<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm6 lg3 class="my-1">
        <v-card class="text-xs-center">
          <v-card-text>Ваш рост {{ height }} см</v-card-text>
          <v-card-text>
           <v-slider :min="150" thumb-label :max="200" v-model="height"></v-slider>
          </v-card-text>
          <v-btn @click="onSave">Сохранить</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
      this.$store.commit('setUserParams', {
        name: 'Height',
        value: this.height
      });
      this.$router.push('/');
    },
  },
  mounted() {
    if (this.$store.getters.userHeight) {
      this.height = this.$store.getters.userHeight
    }
  }
};
</script>


<style scoped>

</style>