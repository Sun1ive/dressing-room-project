<template>
  <nav>
    <v-navigation-drawer
      app
      light
      v-model="drawer"
      absolute
      temporary
      clipped
    >
      <v-list>
        <v-list-tile
          v-for="item in filter"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile 
          @click="drawer = !drawer"
        >
          <v-list-tile-action>
            <v-icon dark>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Свернуть
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        flat
        @click="drawer = !drawer">Фильтр</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn
          flat
          slot="activator"
          >Категории</v-btn>
          <v-list>
            <v-list-tile
              v-for="item in categories"
              :key="item.title"
              @click="$router.push(item.path)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
export default {
  data() {
    return {
      drawer: false,
      filter: [
        {
          title: 'Цвет',
          icon: 'color_lens',
        },
        {
          title: 'Бренд',
          icon: 'star',
        },
        {
          title: 'Цена',
          icon: 'attach_money',
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
      categories: [
        {
          title: 'Плечевые изделия',
          id: 1,
          path: '/',
        },
        {
          title: 'Поясные изделия',
          id: 2,
          path: '/',
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

