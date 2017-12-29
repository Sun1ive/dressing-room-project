<template>
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
        >
          <v-list-tile-action>
            <v-icon dark></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title></v-list-tile-title>
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
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
</style>