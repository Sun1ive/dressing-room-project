<template>
  <v-container fluid>
    <v-layout justify-center align-center row wrap>
      <app-Breast />
    </v-layout>
    <v-layout justify-center align-center row wrap>
      <app-Waist />
    </v-layout>
    <v-layout justify-center align-center row wrap>
      <app-Hips />
    </v-layout>
  </v-container>
</template>

<script>
import Breast from './views/Breast'
import Waist from './views/Waist'
import Hips from './views/Hips'

export default {
  components: {
    'app-Breast': Breast,
    'app-Waist': Waist,
    'app-Hips': Hips,
  }
};
</script>

<style scoped lang="stylus">

</style>