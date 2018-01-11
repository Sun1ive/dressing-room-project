<template>
  <v-container>
    <v-layout class="my-3" justify-center align-center>
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <transition enter-active-class="animated bounceIn">
          <v-alert
            color="error" 
            icon="warning" 
            value="true"
            v-if="error.length > 0"
          >{{ error }}</v-alert>
        </transition>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-form @submit.prevent="onCheckout">
          <h1>Вставьте ссылку на товар</h1>
          <v-text-field
            label="Вставьте ссылку"
            v-model.lazy="link"
          ></v-text-field>
          <v-btn
            color="primary"
            type="submit"
            :disabled="isFilled"
          >Посмотреть</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { LocalStorage, setLocalData } from '../../utils/storage';

export default {
  data() {
    return {
      link: '',
    };
  },
  methods: {
    async onCheckout() {
      if (!this.height || !this.shoulders || !this.breast || !this.waist || !this.hips) {
        alert('пожалуйста укажите параметры');
        this.$store.commit('setSelectedItem', this.link);
        this.$router.push('/');
      } else {
        if (!LocalStorage.get('DressingUserData')) {
          setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
        }
        this.$store.commit('setSelectedItem', this.link);
        await this.$store.dispatch('compareSingle', this.$store.getters.isSelectedItem);
        this.$router.push('/result');
      }
    },
  },
  computed: {
    isFilled() {
      return this.link.length <= 0;
    },
    ...mapGetters({
      error: 'isError',
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
};
</script>

<style lang="stylus" scoped>
</style>
