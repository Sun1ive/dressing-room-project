<template>
  <v-container fluid>
<!--     <v-layout class="my-3" justify-center align-center>
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
    </v-layout> -->
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
    <v-layout justify-center>
      <v-dialog max-width="500" v-model="paramDialog">
        <app-modal>
          <div class="headline" slot="title">Пожалуйста введите параметры</div>
          <div slot="text">Для того, что бы воспользоваться нашей примерочной Вам нужно указать свои параметры</div>
          <v-btn @click="accept" slot="buttonAccept">Ок</v-btn>
          <v-btn @click="cancel" slot="buttonCancel">Отменить</v-btn>
        </app-modal>
      </v-dialog>
    </v-layout>
    <v-layout>
      <v-dialog max-width="500" v-model="errorState">
        <app-modal>
          <div class="headline" slot="title">404 Not found</div>
          <div slot="text">Пока что, по данной ссылке у нашего сервиса нет возможности точно определить на сколько подходит эта вещь по данным параметрам</div>
          <v-btn @click="changeErrorState" slot="buttonAccept">Ок</v-btn>
        </app-modal>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { LocalStorage, setLocalData } from '../../utils/storage';

export default {
  data() {
    return {
      link: '',
      paramDialog: false,
    };
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'setErrorMessage', 'setErrorState']),
    async onCheckout() {
      if (!this.height || !this.shoulders || !this.breast || !this.waist || !this.hips) {
        this.paramDialog = true;
      } else {
        if (!LocalStorage.get('DressingUserData')) {
          setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
        }
        this.setSelectedItem(this.link);
        await this.$store.dispatch('compareSingle', this.isSelectedItem);
        this.$router.push('/result');
      }
    },
    accept() {
      this.setSelectedItem(this.link);
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/');
    },
    changeErrorState() {
      this.setErrorStatus('');
      this.setErrorState(false)
    }
  },
  computed: {
    isFilled() {
      return this.link.length <= 0;
    },
    ...mapGetters({
      errorState: 'isErrorState',
      isSelectedItem: 'isSelectedItem',
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
