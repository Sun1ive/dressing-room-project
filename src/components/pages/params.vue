<template>
  <v-container fluid>

    <v-layout>
      <v-flex class="text-xs-center">
        <h1>Укажите свои параметры</h1>
      </v-flex>
    </v-layout>

    <v-layout class="my-3" justify-center align-center>
      <v-flex xs10 sm6 lg2 class="text-xs-center">
        <h1>Category</h1>
         <v-select
            :items="itemCategories"
            v-model="category"
            label="select category"
            single-line
            bottom
            required
          ></v-select>
      </v-flex>
    </v-layout>

    <app-params v-if="!height">
      <v-btn
      slot="button"
      color="primary"
      to="/height"
      >Ваш рост</v-btn>
    </app-params>

    <app-params v-if="height">
      <v-card-text slot="params">Рост: {{ height }} см <v-btn
      fab
      to="/height"
      ><v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!shoulders">
      <v-btn
      slot="button"
      color="primary"
      to="/shoulders"
      >Ширина плеч</v-btn>
    </app-params>

    <app-params v-if="shoulders">
      <v-card-text slot="params">Плечи: {{ shoulders }} см <v-btn
      fab
      to="/shoulders"
      ><v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    

    <app-params v-if="!breast">
      <v-btn
      slot="button"
      color="primary"
      to="/breast"
      >Обхват груди</v-btn>
    </app-params>

    <app-params v-if="breast">
      <v-card-text slot="params">Грудь: {{ breast }} см <v-btn
      fab
      to="/breast"
      ><v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!waist">
      <v-btn
      slot="button"
      color="primary"
      to="/waist"
      >Обхват талии</v-btn>
    </app-params>

    <app-params v-if="waist">
      <v-card-text slot="params">Талия: {{ waist }} см <v-btn
      fab
      to="/waist"
      ><v-icon>mode_edit</v-icon>
        </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!hips">
      <v-btn
      slot="button"
      color="primary"
      to="/hips"
      >Обхват бедер</v-btn>
    </app-params>

    <app-params v-if="hips">
      <v-card-text slot="params">Бедра: {{ hips }} см <v-btn
      fab
      to="/hips"
      >
      <v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    <app-params>
      <v-btn
      slot="button"
      @click="onCheckout"
      :disabled="isReadyToCheckout"
      >Примерить</v-btn>
    </app-params>

  </v-container>
</template>


<script>
import checkoutMixin from '../../mixins/checkout';

export default {
  mixins: [checkoutMixin],
  data() {
    return {
      category: '',
      itemCategories: ['Плечевые', 'Поясные'],
    };
  },
  computed: {
    isReadyToCheckout() {
      return !this.height || !this.breast || !this.waist || !this.hips || !this.shoulders;
    },
  },
};
</script>


<style scoped lang="stylus">
</style>
