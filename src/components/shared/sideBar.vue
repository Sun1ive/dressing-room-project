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
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>