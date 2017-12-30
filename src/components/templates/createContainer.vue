<template>
  <v-layout justify-center class="my-2">
    <v-flex xs12 class="text-xs-center">
      <v-card>
        <slot name="size"></slot>
        <v-layout justify-center>
          <v-flex xs2 class="mx-2">
             <slot name="shoulders"></slot>
          </v-flex>
          <v-flex xs2 class="mx-2">
            <slot name="breast"></slot>
          </v-flex>
          <v-flex xs2 class="mx-2">
            <slot name="waist"></slot>
          </v-flex>
          <v-flex xs2 class="mx-2">
             <slot name="hips"></slot>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
