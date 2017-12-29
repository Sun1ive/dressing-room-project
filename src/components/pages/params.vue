<template>
  <v-container fluid>

    <v-layout>
      <v-flex class="text-xs-center">
        <h1>Укажите свои параметры</h1>
      </v-flex>
    </v-layout>

    <app-params v-if="!isSetBreast">
      <v-btn
      slot="button"
      color="primary"
      to="/breast"
      >Обхват груди</v-btn>
    </app-params>

    <app-params v-if="isSetBreast">
      <v-card-text slot="params">Грудь: {{ isSetBreast }} см <v-btn
      fab
      to="/breast"
      ><v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!isSetWaist">
      <v-btn
      slot="button"
      color="primary"
      to="/waist"
      >Обхват талии</v-btn>
    </app-params>

    <app-params v-if="isSetWaist">
      <v-card-text slot="params">Талия: {{ isSetWaist }} см <v-btn
      fab
      to="/waist"
      ><v-icon>mode_edit</v-icon>
        </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!isSetHips">
      <v-btn
      slot="button"
      color="primary"
      to="/hips"
      >Обхват бедер</v-btn>
    </app-params>

    <app-params v-if="isSetHips">
      <v-card-text slot="params">Бедра: {{ isSetHips }} см <v-btn
      fab
      to="/hips"
      >
      <v-icon>mode_edit</v-icon>
      </v-btn>
      </v-card-text>
    </app-params>

    <app-params v-if="!isSetArms">
      <v-btn
      slot="button"
      color="primary"
      to="/arm"
      >Обхват руки</v-btn>
    </app-params>

    <app-params v-if="isSetArms">
      <v-card-text slot="params">Рука: {{ isSetArms }} см <v-btn
      fab
      to="/arm"
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
import { mapGetters } from 'vuex';
import { setLocalData } from '../../utils/storage';

export default {
  methods: {
    onCheckout() {
      setLocalData(this.isSetBreast, this.isSetWaist, this.isSetHips, this.isSetArms);
      this.$store.commit('setLoading', true);

      if (this.selectedItem !== null) {
        const filteredItem = this.items.filter(item => item.link === this.selectedItem);
        this.$store.commit('runCompare', filteredItem);
        this.$router.push('/single-result');
      } else {
        this.$store.commit('runCompare', this.items);
        this.$router.push('/result');
      }
    },
  },
  computed: {
    ...mapGetters({
      items: 'items',
      selectedItem: 'selectedItem',
      isSetBreast: 'getBreast',
      isSetWaist: 'getWaist',
      isSetHips: 'getHips',
      isSetArms: 'getArm',
    }),
    isReadyToCheckout() {
      return !this.isSetBreast || !this.isSetWaist || !this.isSetHips || !this.isSetArms;
    },
  },
};
</script>


<style scoped lang="stylus">
</style>
