<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <transition enter-active-class="animated tada">
          <v-alert
            v-if="isError.length > 0"
            color="error" 
            icon="warning" 
            value="true"
          >
            {{ isError }}
          </v-alert>
        </transition>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <v-form @submit.prevent="onLogIn">
          <v-text-field 
            required 
            v-model.lazy="credentials.email" 
            label="Email" 
          />
          <v-text-field 
            required 
            v-model.number.lazy="credentials.password" 
            label="Password" 
            type="password" 
          />
          <v-btn left type="submit">Sign in</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: null,
      },
    };
  },
  methods: {
    async onLogIn() {
      try {
        await this.$store.dispatch('onSignIn', this.credentials);
        this.$router.push('/');
      } catch (error) {}

      /* Надо переписать это. вместо таймаута сделать лоадер мб */
      /* setTimeout(() => {
        if (this.isUserLoginState) {
          this.$router.push('/');
        }
      }, 500);
       */
    },
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      isUserLoginState: 'userLoginState',
    }),
  },
};
</script>

