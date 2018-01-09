<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <v-alert
          v-if="isError.length > 0"
          color="error" 
          icon="warning" 
          value="true"
        >
          {{ isError }}
        </v-alert>
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
          <v-btn type="submit">Sign in</v-btn>
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
    onLogIn() {
      this.$store.dispatch('onSignIn', this.credentials);
      /* Надо переписать это. вместо таймаута сделать лоадер мб */
      setTimeout(() => {
        if (this.isUserLoginState) {
          this.$router.push('/');
        }
      }, 500);
      /*  */
    },
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      isUserLoginState: 'isUserLoginState',
    }),
  },
};
</script>

