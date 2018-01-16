<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>¯\_(ツ)_/¯</h1>
        <p>К сожалению по заданным Вами параметрам, у нас пока-что нет подходящего товара</p>
        <p>Хотите мы с Вам свяжемся, как только пополнится наш ассортимент?</p>
        <p> Для этого укажите пожалуйста свои данные:</p>
        <v-btn @click="dialog = true">Да</v-btn>
        <v-btn exact to="/">Нет, изменить параметры</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-dialog v-model="dialog" max-width="500px">
        <app-form @closeForm="closeForm"></app-form>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Form from '../Shared/Form';

export default {
  components: {
    'app-form': Form,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    closeForm() {
      this.dialog = false;
    }
  },
  computed: {
    ...mapGetters({
      items: 'items',
    }),
  },
};
</script>


<style scoped lang="stylus">

</style>