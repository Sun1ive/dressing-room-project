<template>
    <v-flex class="text-xs-center">
      <v-form @submit.prevent="sendMail" class="myForm">
        <h1>Hello world</h1>
        <v-text-field v-model.lazy="user.name" label="Имя" />
        <v-text-field v-model.number.lazy="user.phone" label="Телефон" />
        <v-text-field v-model.lazy="user.idk" label="Где деньги лежат" />
        <v-btn color="primary" type="submit">Отправить</v-btn>
        <v-btn color="red" dark @click="$emit('closeForm')">Закрыть</v-btn>
      </v-form>
    </v-flex>

</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        phone: null,
        idk: '',
      },
    };
  },
  methods: {
    sendMail() {
      // validate
      // send mail
      console.log(1234);
      this.$emit('closeForm');
    }
  }
};
</script>

<style scoped lang="stylus">
.myForm {
  background-color: #fff;
  padding: 1rem 2rem;
}
</style>