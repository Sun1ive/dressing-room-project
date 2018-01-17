<template>
  <header>
    <v-container fluid>
      <v-layout class="primary" justify-center align-center>
        <v-flex class="text-xs-center white--text">
          <app-toolbar />
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
import Toolbar from './Toolbar';

export default {
  components: {
    'app-toolbar': Toolbar,
  },
};
</script>
