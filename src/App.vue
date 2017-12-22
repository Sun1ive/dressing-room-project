<template>
  <v-app>
    <app-Header />
      <v-content>
        <router-view />
      </v-content>
    <app-Footer />
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
  components: {
    'app-Header': Header,
    'app-Footer': Footer,
  },
};
</script>

<style lang="stylus">
html {
  // overflow-y: hidden;
}

#app {
  // max-width: 700px;
  // max-width: 950px;
  margin: 0 auto;
  outline: none;
}

.container {
  padding: 0;
}

.input-group--slider {
  outline-style: none;
}

.content--wrap {
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s linear;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
