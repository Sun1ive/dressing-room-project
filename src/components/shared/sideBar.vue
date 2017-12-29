<template>
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
          @click="$emit('closeBar')"
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
    return {
      filter: [
        {
          title: 'Цвет',
          icon: 'color_lens'
        },
        {
          title: 'Бренд',
          icon: 'star'
        },
        {
          title: 'Цена',
          icon: 'attach_money'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>