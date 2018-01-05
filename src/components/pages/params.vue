<template>
  <v-container fluid>


  </v-container>
</template>


<script>
import checkoutMixin from '../../mixins/checkout';

export default {
  mixins: [checkoutMixin],
  data() {
    return {
      category: null,
      itemCategories: ['Плечевые', 'Поясные'],
    };
  },
  computed: {
    isReadyToCheckout() {
      return !this.height || !this.breast || !this.waist || !this.hips || !this.shoulders || !this.category;
    },
  },
};
</script>


<style scoped lang="stylus">
</style>
