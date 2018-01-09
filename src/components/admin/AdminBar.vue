<template>
<v-navigation-drawer
      v-model="drawer"
      app
      clipped
      absolute
      >
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Admin Page</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-group 
          v-for="item in items" 
          :value="item.active" 
          :key="item.title"
          >
            <v-list-tile 
            slot="item"
            >
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.path"
              class="adminListItems"
             >
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      adminMenu: [
        {
          title: 'Добавить',
          icon: 'star',
          path: '/admin/create',
        },
        {
          title: 'Список',
          icon: 'star',
          path: '/admin/view',
        },
      ],
      items: [
        {
          action: 'local_offer',
          title: 'Товары',
          items: [
            { title: 'Список', path: '/admin/view', icon: 'list' },
            { title: 'Добавить', path: '/admin/create', icon: 'add' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="stylus">

</style>