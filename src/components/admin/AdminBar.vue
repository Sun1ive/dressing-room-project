<template>
 <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          @click="$router.push(item.path)"
          v-for="item in adminMenu"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-container fluid>
        <v-layout
          justify-center
          align-center
        >
        <router-view />
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
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
    };
  },
};
</script>

<style scoped>

</style>