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
import checkoutMixin from '../../mixins/checkout';

export default {
  mixins: [checkoutMixin],
  data() {
    return {
      link: ''
    }
  }
}
</script>