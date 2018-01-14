<template>
  <v-container fluid>
    <v-layout class="mt-4" justify-center align-center>
      <v-pagination 
        :length="totalPages"
        v-model="currentPage"
        @input="changePage"
      />
    </v-layout>
    <v-layout class="pt-4" justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <h2>Поиск по названию товара</h2>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs10>
        <v-text-field
          light
          solo
          prepend-icon="search"
          placeholder="Поиск"
          v-model="query"
        />
      </v-flex>
    </v-layout>
    <v-layout 
      class="my-2"
      justify-center
      v-for="item in searchQuery"
      :key="item._id"
    >
      <v-flex xs10>
        <v-card>
          <v-layout align-center justify-space-between row wrap>
            <v-flex xs10 class="ml-2">
              <v-card-text>
                <div class="headline">{{ item.title }}</div>
              </v-card-text>
            </v-flex>
            <v-flex>
              <v-btn
              color="primary"
              fab
              :to="`/admin/edit/${item._id}`"
              >
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn
                fab
                color="red darken-1"
                dark
                @click="deleteItem(item._id)"
              >
                <v-icon>delete</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { withHeaders } from '../../services/api';
import { SessionStorage } from '@/utils/storage';

export default {
  data() {
    return {
      query: '',
      currentPage: 1,
      perPage: 2,
    };
  },
  methods: {
    async deleteItem(id) {
      if (confirm('Are you sure ?')) {
        try {
          const token = `Bearer ${SessionStorage.get('AuthToken')}`;
          this.$store.commit('removeElementFromItemsInState', id);
          await withHeaders(token).delete(`/products/${id}`);
        } catch (error) {
          throw new Error(`Something wrong ${error.response}`);
        }
      }
    },
    changePage() {
      console.log(1234);
    },
  },
  computed: {
    searchQuery() {
      if (this.query.length > 0) {
        return this.$store.getters.items.filter(item =>
          item.title.toLowerCase().match(this.query.toLowerCase()),
        );
      }
      return this.$store.getters.items.splice(this.spliceFrom, this.sliceFrom + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.$store.getters.items.length / this.perPage - 1);
    },
    sliceFrom() {
      return this.currentPage * this.perPage;
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
