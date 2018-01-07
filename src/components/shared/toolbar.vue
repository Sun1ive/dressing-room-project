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
        >{{ item.title }} {{ item.visible }}</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items v-if="userIsAuth">
        <v-menu offset-y>
          <v-btn
          flat
          slot="activator"
          >Admin Menu</v-btn>
          <v-list>
            <v-list-tile
              v-for="item in adminMenu"
              :key="item.title"
              @click="$router.push(item.path)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      adminMenu: [
        {
          title: 'Admin View Page',
          path: '/admin/view',
        },
        {
          title: 'Admin Create Page',
          path: '/admin/create',
        },
      ],
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        {
          title: 'Мои параметры',
          path: '/',
          icon: 'home',
        },
        {
          title: 'Ссылка',
          path: '/insert',
          icon: 'link',
        },
        {
          title: 'Войти',
          path: '/signin',
          icon: 'account_circle',
        },
      ];
      if (this.userIsAuth) {
        menuItems = [
          {
            title: 'Мои параметры',
            path: '/',
            icon: 'home',
          },
          {
            title: 'Ссылка',
            path: '/insert',
            icon: 'link',
          },
        ];
      }
      this.filtered.length > 0
        ? menuItems.push({
            title: 'Результат',
            path: '/result',
          })
        : 0;
      return menuItems;
    },
    ...mapGetters({
      userIsAuth: 'isUserSignIn',
      filtered: 'filtered',
    }),
  },
};
</script>

