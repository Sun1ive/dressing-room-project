<template>
<nav>
  <v-navigation-drawer
    v-model="drawer"
    clipped
    absolute
    temporary
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Фильтр</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in filterItems"
        :key="item"
        @click="">
        <v-list-tile-content>
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        v-if="isItems"
      ></v-toolbar-side-icon>
      <v-spacer />
      <!-- <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon> -->
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
import uniq from 'lodash/uniq';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          title: 'Мои параметры',
          path: '/',
        },
        {
          title: 'Ссылка',
          path: '/insert',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      isUserAuth: 'userLoginState',
      items: 'items',
    }),
    filterItems() {
      if (this.items) {
        return uniq(this.items.map(item => item.color));
      }
    },
    isItems() {
      if (this.items) {
        return this.items.length > 0
      }
    },
  },
};
</script>

<style scoped>

</style>