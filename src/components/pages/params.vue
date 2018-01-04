<template>
  <v-container fluid>

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
  computed: {
    isReadyToCheckout() {
      return !this.height || !this.breast || !this.waist || !this.hips || !this.shoulders;
    }
  }
}

/* import { mapGetters } from 'vuex';
import { setLocalData } from '../../utils/storage';

export default {
  methods: {
    onCheckout() {
      setLocalData(this.isSetHeight, this.isSetShoulders, this.isSetBreast, this.isSetWaist, this.isSetHips);
      this.$store.commit('setLoading', true);

      if (this.selectedItem !== null) {
        const filteredItem = this.items.filter(item => item.link === this.selectedItem);
        if (filteredItem.length === 0) {
          this.$store.dispatch('sendMail', this.selectedItem);
          this.$router.push('/404');
        } else {
          this.$store.commit('runCompare', filteredItem);
          this.$router.push('/single-result');
        }
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
      isSetHeight: 'getHeight',
      isSetShoulders: 'getShoulders',
      isSetBreast: 'getBreast',
      isSetWaist: 'getWaist',
      isSetHips: 'getHips',
    }),
    isReadyToCheckout() {
      return !this.isSetHeight || !this.isSetBreast || !this.isSetWaist || !this.isSetHips || !this.isSetShoulders;
    },
  },
}; */
</script>


<style scoped lang="stylus">
</style>
