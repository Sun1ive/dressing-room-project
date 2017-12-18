<template>
  <header @click="home">
    <v-container fluid>
      <v-layout class="primary" justify-center align-center>
        <v-flex class="text-xs-center white--text">
          Онлайн примерочная inDresser
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push('/');
    },
  },
};
</script>


<style scoped lang="stylus">
header {
  cursor: pointer;

  .container {
    .layout {
      min-height: 50px;
      font-size: responsive 1rem 1.6rem;
    }
  }
}
</style>
