<template>
  <v-app light>
    <app-Header />
    <v-content>
      <app-Home />
    </v-content>
    <app-Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

export default {
  components: {
    'app-Header': Header,
    'app-Home': Home,
    'app-Footer': Footer,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="stylus">
html {
  overflow-y: hidden;
}

#app {
  max-width: 700px;
  margin: 0 auto;
  outline: none;

  .container {
    padding: 0;
  }
}

.input-group--slider {
  outline-style: none;
}

.content--wrap {
  align-items: center;
}
</style>