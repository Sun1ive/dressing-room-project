<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs10 sm6 lg4>
        <v-text-field v-model="query"/>
      </v-flex>
    </v-layout>
    <v-layout 
      v-if="query.length > 0"
      class="my-2"
      justify-center
      v-for="item in searchQuery"
      :key="item.title"
    >
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
    <v-layout 
      v-if="query.length === 0"
      class="my-2"
      justify-center
      v-for="item in getLoadedItems"
      :key="item.title"
    >
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
  },
  computed: {
    getLoadedItems() {
      return this.$store.getters.items;
    },
    searchQuery() {
      return this.getLoadedItems.filter(item => item.title.toLowerCase().match(this.query))
    }
  },
};
</script>

<style scoped lang="stylus">
.card__text {
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
</style>
