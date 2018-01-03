<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs10 sm6 lg4>
        <v-text-field v-model="query"/>
      </v-flex>
    </v-layout>
    <v-layout 
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
  </v-container>
</template>

<script>
import { withAuth } from '../../services/api';
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
          const c = SessionStorage.get('userAdminCredentials');
          this.$store.commit('removeFromItemList', id);
          await withAuth(c.username, c.password).delete('/products/' + id);
        } catch (error) {
          console.log(error);
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
