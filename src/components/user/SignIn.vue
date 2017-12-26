<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <v-form @submit.prevent="onLogIn">
          <v-text-field v-model="username" label="Username" />
          <v-text-field v-model="password" label="Password" type="password" />
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
      username: '',
      password: null,
    }
  },
  methods: {
    onLogIn() {
    }
  }
};
</script>

