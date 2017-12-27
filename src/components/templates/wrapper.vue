<template>
  <app-container justify-center fluid align-center row wrap>
    <v-card>
      <slot name="pic"></slot>
      <slot name="text"></slot>
      <slot name="size"></slot>
      <slot name="slider"></slot>
      <v-card-actions>
        <slot name="button"></slot>
      </v-card-actions>
    </v-card>
  </app-container>
</template>