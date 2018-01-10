<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-form @submit.prevent="onCheckout">
          <h1>Вставьте ссылку на товар</h1>
          <v-text-field
            label="Вставьте ссылку"
            v-model.lazy="link"
          ></v-text-field>
          <v-btn
            color="primary"
            type="submit"
            :disabled="isFilled"
          >Посмотреть</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      link: '',
    };
  },
  methods: {
    async onCheckout() {
      this.$store.commit('setSelectedItem', this.link);
      await this.$store.dispatch('compareSingle', this.$store.getters.isSelectedItem);
      this.$router.push('/result');
    },
  },
  computed: {
    isFilled() {
      return this.link.length <= 0;
    },
  },
};
</script>