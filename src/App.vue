<template>
  <v-app>
    <app-Header />
      <v-content>
        <transition
          name="fade"
          mode="out-in"
        >
          <!-- <router-view /> -->
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
