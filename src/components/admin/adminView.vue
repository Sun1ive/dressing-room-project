<template>
  <v-container fluid>
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
          <v-card-text>
            <span>
              <strong>
                {{ item.title }}
              </strong>
            </span>
          </v-card-text>
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
    };
  },
  methods: {
    async deleteItem(id) {
      if (confirm('Are you sure ?')) {
        try {
          const token = `Bearer ${SessionStorage.get('AuthToken')}`
          this.$store.commit('removeFromItemList', id);
          await withHeaders(token).delete(`/products/${id}`);
        } catch (error) {
          throw new Error(`Something wrong ${error.response}`);
        }
      }
    },
  },
  computed: {
    searchQuery() {
      return this.$store.getters.items.filter(item =>
        item.title.toLowerCase().match(this.query.toLowerCase()),
      );
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
