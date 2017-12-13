<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6>
        <v-form @submit.prevent="addToBase">
          <v-text-field v-model="item.title" label="title"></v-text-field>
          <v-text-field v-model="item.link" label="link"></v-text-field>
          <v-text-field v-model="item.size" label="size?"></v-text-field>
          <v-btn color="primary" right type="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '',
        link: '',
        size: '',
      },
    };
  },
  methods: {},
};
</script>


<style scoped lang="stylus"></style>