<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      absolute
    >
      <v-list>
        <v-list-tile-content class="hello">
          <h1>Admin page</h1>
        </v-list-tile-content>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-tile
          :to="item.path"
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
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </v-layout>
      </v-container>
  </v-container>
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
    };
  },
};
</script>

<style scoped lang="stylus">
.hello
  justify-content center 
  text-align center
  align-items center 

</style>