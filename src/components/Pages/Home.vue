<template>
  <v-container fluid class="home">
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <h1>Добро пожаловать в онлайн примерочную</h1>
        <p>Здесь вы можете примерить на себе конкретную вещь или же все вещи из нашей базы.</p>
      </v-flex>
    </v-layout>
   
    <v-layout>
      <v-flex class="text-xs-center">
        <h1>Укажите свои параметры</h1>
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

    <v-layout>
      <v-dialog max-width="500" v-model="errorState">
        <app-modal>
          <div class="headline" slot="title">{{ errorMessage }}</div>
          <div slot="text">Пока что, по данной ссылке у нашего сервиса нет возможности точно определить на сколько подходит эта вещь по данным параметрам</div>
          <v-btn @click="changeErrorState" slot="buttonAccept">Посмотреть все</v-btn>
        </app-modal>
      </v-dialog>
    </v-layout>

    <app-params>
      <v-btn
      slot="button"
      :disabled="isReadyToCheckout"
      @click="onCheckout"
      >Примерить</v-btn>
    </app-params>
  </v-container>
</template>


<script>
import { setLocalData } from '../../utils/storage';
import myMixin from '@/mixins/functional';

export default {
  mixins: [myMixin],
  methods: {
    async onCheckout() {
      setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
      if (this.isSelectedItem) {
        await this.$store.dispatch('compareSingle', this.isSelectedItem);
        this.$router.push('/result');
      } else {
        await this.$store.dispatch('compareProductsWithType');
        this.$router.push('/result');
      }
    },
  },
  computed: {
    isReadyToCheckout() {
      return !this.height || !this.breast || !this.waist || !this.hips || !this.shoulders;
    },
  },
};
</script>





<style lang="stylus" scoped>
</style>

