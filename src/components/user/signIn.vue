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
          <v-text-field required v-model="credentials.username" label="Username" />
          <v-text-field required v-model.number="credentials.password" label="Password" type="password" />
          <v-btn type="submit">Sign in</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: null,
      },
    };
  },
  methods: {
    onLogIn() {
      this.$store.dispatch('onSignIn', this.credentials);
      setTimeout(() => {
        if (this.$store.getters.isUserSignIn) {
          this.$router.push('/');
        }
      }, 100);
    },
  },
  computed: {
    isError() {
      return this.$store.state.error;
    }
  }
};
</script>

