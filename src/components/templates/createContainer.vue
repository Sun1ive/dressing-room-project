<template>
  <v-container>
    <v-layout justify-center class="my-2">
      <v-flex xs10 class="text-xs-center">
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
    <v-layout justify-center align-center>
      <v-flex xs10 class="text-xs-center">
        <v-card>
          <slot name="size-bottom"></slot>
          <v-layout justify-center align-center>
            <v-flex xs5 class="mx-2">
              <slot name="waist-bottom"></slot>
            </v-flex>
            <v-flex xs5 class="mx-2">
              <slot name="hips-bottom"></slot>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
