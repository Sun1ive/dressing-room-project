<template>
  <v-container fluid>
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
            :disabled="!isFilled"
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
          <div class="headline" slot="title">{{ errorMessage }}</div>
          <div slot="text">Пока что, по данной ссылке у нашего сервиса нет возможности точно определить на сколько подходит эта вещь по данным параметрам</div>
          <v-btn @click="changeErrorState" slot="buttonAccept">Посмотреть все</v-btn>
        </app-modal>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import myMixin from '../../mixins/functional';

/* export default {
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
    async changeErrorState() {
      this.setErrorState(false);
      this.setSelectedItem(null);
      // this.setErrorMessage('');
      await this.$store.dispatch('compareProductsWithType');
      this.$router.push('/result');
    },
  },
  computed: {
    isFilled() {
      return this.link.length <= 0;
    },
    ...mapGetters({
      errorState: 'isErrorState',
      errorMessage: 'isErrorMessage',
      isSelectedItem: 'isSelectedItem',
      height: 'userHeight',
      shoulders: 'userShoulders',
      breast: 'userBreast',
      waist: 'userWaist',
      hips: 'userHips',
    }),
  },
}; */
export default {
  mixins: [myMixin],
   data() {
    return {
      link: '',
      paramDialog: false,
    };
  },
  methods: {
    accept() {
      this.setSelectedItem(this.link);
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/');
    },
  },
  computed: {
    isFilled() {
      return this.link.length > 0;
    },
  },
};

</script>

<style lang="stylus" scoped>
</style>
