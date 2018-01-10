<template>
  <v-container fluid>
    <v-layout class="mt-4" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
          <v-card-title>
            <v-flex class="text-xs-center">
              <h1>Классификация</h1>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-select></v-select>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3" justify-center align-center>
      <v-flex class="text-xs-center">
        <v-card>
        <h1>Цвета</h1>
          <v-card-text>
            <!-- <v-checkbox
              v-for="(color, i) in itemsColors"
              :key="i"
              :label="color"
              v-model="selectedColors"
              :value="color"
            ></v-checkbox> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>

</style>