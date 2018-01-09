<template>
<nav>
    <v-toolbar dark color="primary">
      <v-spacer />
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          exact
          >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items v-if="!isUserAuth">
        <v-btn 
          flat 
          to="/signin"
        >SignIn</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn 
          flat 
          to="/admin"
        >Admin</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: 'Мои параметры',
          path: '/',
        },
        {
          title: 'Ссылка',
          path: '/insert'
        }
      ]
    }
  },
  computed: {
    isUserAuth() {
      return this.$store.getters.userLoginState
    }
  }
};
</script>

<style scoped>

</style>