<template>
  <v-toolbar dark color="primary">
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-for="(item, index) in menuItems" :key="index" :to="item.path">{{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: 'Главная',
          path: '/',
          id: 1,
        },
        {
          title: 'Ссылка',
          path: '/insert',
          id: 2,
        },
        {
          title: 'Посмотреть все',
          path: '/',
          id: 3,
        },
      ],
    };
  },
};
</script>

