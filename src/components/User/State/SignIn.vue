<template>
  <v-container fluid>
    <transition 
      mode="out-in"
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
    >
      <v-container fluid v-if="isError.state">
        <app-error>
          {{ isError.message }}
        </app-error>
      </v-container>
    </transition>
    <v-container fluid>
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
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AlertError from '@/components/Shared/Alerts/AlertError';

export default {
  components: {
    'app-error': AlertError,
  },
  data() {
    return {
      credentials: {
        email: '',
        password: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      isUserLoginState: 'userLoginState',
    }),
  },
  methods: {
    async onLogIn() {
      try {
        await this.$store.dispatch('onSignIn', this.credentials);
        this.$router.push('/');
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>
