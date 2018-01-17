<template>
  <v-app>
    <app-Header />
    <v-content>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-content>
    <app-Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Shared/Header';
import Footer from '@/components/Shared/Footer';

export default {
  components: {
    'app-Header': Header,
    'app-Footer': Footer,
  },
};
</script>

<style lang="stylus">
.container
  padding: 0

.content--wrap
  align-items: center;

.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to
  opacity: 0

.input-group--slider
  outline-style: none;
</style>
