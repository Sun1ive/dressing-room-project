<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>¯\_(ツ)_/¯</h1>
        <p>К сожалению по заданным Вами параметрам, у нас пока-что нет подходящего товара</p>
        <p>Хотите мы с Вам свяжемся, когда у нас обновится ассортимент?</p>
        <v-btn @click="showForm">Да</v-btn>
        <v-btn exact to="/">Нет, изменить параметры</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-dialog v-model="dialog" max-width="500px">
        <v-flex class="text-xs-center">
          <v-form @submit.prevent="sendMail" class="myForm">
            <h1>Hello world</h1>
            <v-text-field v-model="user.name" label="Имя" />
            <v-text-field v-model="user.phone" label="Телефон" />
            <v-text-field v-model="user.idk" label="Где деньги лежат" />
            <v-btn color="primary" type="submit">Отправить</v-btn>
            <v-btn color="red" dark @click="dialog = false">Закрыть</v-btn>
          </v-form>
        </v-flex>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      user: {
        name: '',
        phone: null,
        idk: '',
      },
    };
  },
  methods: {
    showForm() {
      this.dialog = true;
    },
    sendMail() {
      this.dialog = false;
      console.log(12345);
    },
  },
  computed: {
    ...mapGetters({
      items: 'items',
    }),
    errorMessage() {
      if (this.items.length < 1) {
        return 'К сожалению по заданным Вами параметрам, у нас пока-что нет подходящего товара';
      }
    },
  },
};
</script>


<style scoped lang="stylus">
.myForm {
  background-color: #fff;
  padding: 1rem 2rem;
}
</style>