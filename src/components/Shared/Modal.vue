<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
          <v-card-title>
            <slot name="title"/>
          </v-card-title>
          <v-card-text>
            <slot name="text"/>
          </v-card-text>
          <v-card-actions>
            <slot name="buttonAccept"/>
            <slot name="buttonCancel"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.card__title, .card__actions
  justify-content center
</style>