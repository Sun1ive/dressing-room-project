<template>
  <div class="scroll" @click="scroll" />
</template>

<script>
export default {
  methods: {
    scroll() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="stylus" scoped>
.scroll
  position fixed
  right 20px
  bottom 20px
  cursor pointer
  min-height 40px
  min-width 40px
  background-image url('/static/arrow.svg');

</style>
