<template>
  <v-container fluid>
    <v-container fluid v-if="isLoading">
      <app-loader />
    </v-container>
    <v-container fluid v-else>
      <v-layout align-center justify-center>
        <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
          <v-form @submit.prevent="onCheckout">
            <h1>Вставьте ссылку на товар</h1>
            <v-text-field
              label="Вставьте ссылку"
              v-model.lazy.trim="link"
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
        <v-dialog max-width="500" v-model="isError.state">
          <app-modal>
            <div class="headline" slot="title">{{ isError.status }} | {{ isError.message }}</div>
            <div slot="text">Пока что, по данной ссылке у нашего сервиса нет возможности точно определить на сколько подходит эта вещь по данным параметрам</div>
            <div>Хотите посмотреть все товары?</div>
            <v-btn @click="checkAllProducts" slot="buttonAccept">Посмотреть все</v-btn>
          </app-modal>
        </v-dialog>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import myMixin from '@/mixins/functional';
import { LocalStorage, setLocalData } from '@/utils/storage';

export default {
  mixins: [myMixin],
  data() {
    return {
      link: '',
      paramDialog: false,
    };
  },
  methods: {
    async onCheckout() {
      this.setLoading(true)
      if (!this.height || !this.shoulders || !this.breast || !this.waist || !this.hips) {
        this.setLoading(false);
        this.paramDialog = true;
      } else {
        if (!LocalStorage.get('DressingUserData')) {
          setLocalData(this.height, this.shoulders, this.breast, this.waist, this.hips);
        }
        this.setSelectedItem(this.link);
        await this.compareSingle(this.isSelectedItem);
        this.setLoading(false)
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
  },
  computed: {
    isFilled() {
      return this.link.length > 0;
    },
    isError() {
      return this.$store.getters.isError;
    }
  },
};
</script>

<style lang="stylus" scoped>
</style>
