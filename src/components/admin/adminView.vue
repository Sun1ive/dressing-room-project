<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs10 sm6 lg4>
        <v-text-field v-model="query" @input="searchQuery" />
      </v-flex>
    </v-layout>
    <!-- <v-layout class="my-2" justify-center v-for="item in getLoadedItems" :key="item.title"> -->
    <v-layout class="my-2" justify-center v-for="item in filteredArray" :key="item.title">
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <span>{{ item.title }}</span>
            <v-spacer></v-spacer>
            <v-btn
            flat
            :to="`/admin/edit/${item._id}`"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
            flat
            @click="deleteItem(item._id)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      query: '',
      filteredArray: [],
    };
  },
  methods: {
    deleteItem(id) {
      // if (confirm('Are you sure ?')) alert(id);
    },
    searchQuery() {
      // this.filteredArray = _.filter(this.getLoadedItems, item => item.title === this.query);
      this.filteredArray = _.filter(this.getLoadedItems, item =>
        item.title.toLowerCase().includes(this.query.toLowerCase()),
      );
    },
  },
  computed: {
    getLoadedItems() {
      return this.$store.getters.items;
    },
  },
};
</script>

<style scoped lang="stylus">
.card__text {
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
</style>
