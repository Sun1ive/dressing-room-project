<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <AdminCreate v-if="isActiveCreatePage" />
    </v-layout>
    <v-layout></v-layout>
  </v-container>
</template>

<script>
import AdminCreate from './AdminCreate';

export default {
  components: {
    AdminCreate,
  },
  data() {
    return {
      isActiveCreatePage: false,
    }
  }
};
</script>


<style scoped lang="stylus">
</style>
