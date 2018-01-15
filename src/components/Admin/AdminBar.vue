<template>
  <v-navigation-drawer
    app
    clipped
    absolute
    :mini-variant="miniVariant"
    >
    <v-layout row>
      <v-flex>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-side-icon
              @click="miniVariant = !miniVariant"
            ></v-toolbar-side-icon>
            <v-toolbar-title v-if="!miniVariant">Admin menu</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-tile 
              v-for="item in items"
              :key="item.title"
              :to="item.path">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
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
      miniVariant: false,
      items: [
        { title: 'Список', path: '/admin/view', icon: 'list' },
        { title: 'Добавить', path: '/admin/create', icon: 'add' },
      ],
    };
  },
};
</script>

<style scoped lang="stylus">
</style>