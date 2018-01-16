<template>
    <v-flex class="text-xs-center">
      <v-form @submit.prevent="sendMail" class="myForm">
        <h2>Введите Ваши данные</h2>
        <v-text-field 
          v-model.lazy="user.name" 
          label="Введите Ваше имя" 
          required
          :rules="[() => !!user.name || 'This Field is required']"
        />
        <p>Выберите наиболее удобный способ связи с вами</p>
        <v-radio-group row v-model="user.selected">
          <v-radio 
            v-for="item in radio" 
            :key="item.label"
            :label="item.label"
            :value="item.value"
            color="indigo"
          />
        </v-radio-group>
        <!-- <v-text-field
          label="Email"
          v-if="userSelected === 'Email'"
          v-model="user.email"
          :rules="[() => !!user.email || 'Это поле обязательно!']" 
        /> -->

        <v-btn 
          color="primary" 
          type="submit"
          :disabled="isFilled"
        >Отправить</v-btn>
        <v-btn 
          color="red" 
          dark 
          @click="$emit('closeForm')"
        >Закрыть</v-btn>
      </v-form>
    </v-flex>

</template>

<script>
export default {
  data() {
    return {
      user: {
        selected: null,
        name: null,
      },
      radio: [
        {
          label: 'E-mail',
          value: 'Email',
        },
        {
          label: 'Messenger',
          value: 'Messenger',
        },
        {
          label: 'Телефон',
          value: 'Phone',
        },
      ],
    };
  },
  methods: {
    sendMail() {
      // validate
      // let data = {
      //   mailType: 'userMail',
      //   name: this.user.name,
      // };
      // if (this.userSelected === 'Phone') {
      //   data.phone = this.user.phone;
      // } else if (this.userSelected === 'Messenger') {
      //   data.messenger = this.user.messenger;
      // } else {
      //   data.email = this.user.email;
      // }
      // send mail
      this.$store.dispatch('sendMail', data);
      this.$emit('closeForm');
      this.$router.push('/');
    },
  },
  computed: {
    isFilled() {
      return !this.user.name;
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
