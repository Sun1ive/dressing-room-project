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
    onCheckout() {
      this.$store.dispatch('getSingleItem', {
        link: this.link,
      });
      this.$router.push('/result');
    },
  },
};
</script>