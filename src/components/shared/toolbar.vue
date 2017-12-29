<template>
  <nav>
    <app-sidebar
    :drawer="drawer"
    ></app-sidebar>
    <v-toolbar dark color="primary">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        flat
        @click="drawer = !drawer">Меню</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-items
        class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          exact
        >{{ item.title }}</v-btn>
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
import sideBar from './sideBar';

export default {
  components: {
    'app-sidebar': sideBar,
  },
  data() {
    return {
      drawer: false,
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
          title: 'Главная',
          path: '/',
          id: 1,
          icon: 'home',
        },
        {
          title: 'Ссылка',
          path: '/insert',
          id: 2,
          icon: 'link',
        },
        // {
        //   title: 'Посмотреть все',
        //   path: '/checkAll',
        //   id: 3,
        //   icon: 'view_list',
        // },
        {
          title: 'Указать параметры',
          path: '/params',
          id: 4,
          icon: 'settings',
        },
        {
          title: 'Sign in',
          path: '/signin',
          id: 5,
          icon: 'account_circle',
        },
      ];
      if (this.userIsAuth) {
        menuItems = [
          {
            title: 'Главная',
            path: '/',
            id: 1,
            icon: 'home',
          },
          {
            title: 'Ссылка',
            path: '/insert',
            id: 2,
            icon: 'link',
          },
          // {
          //   title: 'Посмотреть все',
          //   path: '/checkAll',
          //   id: 3,
          //   icon: 'view_list',
          // },
          {
            title: 'Указать параметры',
            path: '/params',
            id: 4,
            icon: 'settings',
          },
        ];
      }
      return menuItems;
    },
    userIsAuth() {
      return this.$store.getters.isUserSignIn;
    },
  },
};
</script>

