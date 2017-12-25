<template>
  <nav>
    <v-navigation-drawer
      app
      dark
      v-model="drawer"
      absolute
      temporary
      clipped
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          @click="$router.push(`${item.path}`)"
        >
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="drawer = !drawer">
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
      <v-toolbar-items>
        <v-btn
        flat
        @click="drawer = !drawer">Меню</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
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
      <v-toolbar-items>
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
      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
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
        {
          title: 'Посмотреть все',
          path: '/checkAll',
          id: 3,
          icon: 'view_list',
        },
        {
          title: 'Указать параметры',
          path: '/params',
          id: 4,
          icon: 'settings',
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
        {
          title: 'Admin Edit Page',
          path: '/admin/edit',
        },
      ],
      drawer: false,
    };
  },
};
</script>

