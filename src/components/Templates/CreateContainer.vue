<template>
  <v-container>
    <v-layout 
      justify-center
      class="my-2"
    >
      <v-flex
        xs10 
        class="text-xs-center"
      >
        <v-card>
          <slot 
            name="size"
          />
          <v-layout 
            justify-center
            row
          >
            <v-flex 
            xs2 class="mx-2">
              <slot 
              name="shoulders"/>
            </v-flex>
            <v-flex 
            xs2 class="mx-2">
              <slot 
              name="breast"/>
            </v-flex>
            <v-flex 
            xs2 class="mx-2">
              <slot 
              name="waist"/>
            </v-flex>
            <v-flex 
            xs2 class="mx-2">
              <slot 
              name="hips"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="my-2" justify-center align-center>
      <v-flex xs10 class="text-xs-center">
        <v-card>
          <slot name="bottom-size"/>
          <v-layout justify-center align-center>
            <v-flex xs5 class="mx-2">
              <slot name="bottom-waist"/>
            </v-flex>
            <v-flex xs5 class="mx-2">
              <slot name="bottom-hips"/>>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
