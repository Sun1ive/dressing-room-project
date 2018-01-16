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
            label="E-mail"
            color="indigo"
            value="Email"
          />
          <v-radio 
            label="Messenger"
            color="indigo"
            value="Messenger"
          />
          <v-radio 
            label="Телефон"
            color="indigo"
            value="Phone"
          />
        </v-radio-group>

        <v-text-field 
          label="Email"
          v-if="userSelected === 'Email'"
          v-model="user.email"
          :rules="[() => !!user.email || 'Это поле обязательно!']" 
        />
        <v-text-field 
          label="Messenger"
          v-if="userSelected === 'Messenger'"
          v-model="user.messenger"
          :rules="[() => !!user.messenger || 'Это поле обязательно!']" 
        />
        <v-text-field 
          label="Phone"
          v-if="userSelected === 'Phone'"
          v-model.number="user.phone"
          :rules="[() => !!user.phone || 'Это поле обязательно!']" 
        />

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
    };
  },
  methods: {
    sendMail() {
      // validate
      let data = {
        mailType: 'userMail',
        name: this.user.name,
      };
      if (this.userSelected === 'Phone') {
        data.phone = this.user.phone;
      } else if (this.userSelected === 'Messenger') {
        data.messenger = this.user.messenger;
      } else {
        data.email = this.user.email;
      }
      // send mail
      this.$store.dispatch('sendMail', data);
      this.$emit('closeForm');
      this.$router.push('/');
    },
  },
  computed: {
    isFilled() {
      if (!this.user.phone) {
        return !this.user.name && !this.user.phone;
      } else if (!this.user.email) {
        return !this.user.name && this.user.email;
      } else {
        return !this.user.name && this.user.messenger;
      }
    },
    userSelected() {
      return this.user.selected;
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
