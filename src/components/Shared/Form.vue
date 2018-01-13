<template>
    <v-flex class="text-xs-center">
      <v-form @submit.prevent="sendMail" class="myForm">
        <h1>Hello world</h1>
        <v-text-field v-model.lazy="user.name" label="Имя" />
        <v-text-field v-model.number.lazy="user.phone" label="Телефон" />
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
      },
    };
  },
  methods: {
    sendMail() {
      // validate
      // send mail
      this.$store.dispatch('sendMail', {
        mailType: 'userMail',
        name: this.user.name,
        phone: this.user.phone,
      });
      this.$emit('closeForm');
      this.$router.push('/');
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