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
      <v-toolbar-items 
        v-if="filtered.length > 0"
        class="hidden-sm-and-down"
      >
        <v-btn
          flat
          v-for="result in results"
          :key="result.title"
          :to="result.path"
          exact
          >
          {{ result.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items 
        v-if="userIsAuth"
      >
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
      drawer: false,
      menu: [
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
      ],
      result: [
        {
          title: 'Результат',
          path: '/',
          icon: 'star',
        },
      ],
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
      if (this.userIsAuth) {
        this.menu = [
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
      return this.menu;
    },
    results() {
      if (this.filtered.length === 1) {
        this.result[0].path = '/single-result'
      } else if (this.filtered.length > 1) {
        this.result[0].path = '/result'
      }
      return this.result;
    },
    ...mapGetters({
      userIsAuth: 'isUserSignIn',
      filtered: 'filtered',
    }),
  },
};
</script>

