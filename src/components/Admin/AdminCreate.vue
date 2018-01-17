<template>
  <v-container fluid>
    <transition 
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <app-success v-if="isOk">
        Successful!
      </app-success>
    </transition>
    <v-layout 
      class="pt-5" 
      justify-center 
      align-center
    >
      <v-flex xs10 sm8 lg6>
        <v-form
          class="form text-xs-center" 
          @submit.prevent="addToBase" >
          <h1>Форма добавления вещи в базу</h1>
          <p>Параметры которых нет, можно не указывать</p>

          <v-select
            :items="typeList"
            v-model="item.type"
            label="select type"
            single-line
            bottom
            required
            :rules="[() => !!item.type || 'This field is required']"
          />

          <v-text-field 
            v-model.lazy="item.title"
            label="title"
            required
            :rules="[() => !!item.title || 'This field is required']"
          />

          <v-text-field 
            required
            v-model.lazy="item.src"
            label="src"
            :rules="[() => !!item.src || 'This field is required']"
          />

          <v-text-field 
            required
            v-model.lazy="item.link"
            label="link"
            :rules="[() => !!item.link || 'This field is required']"
          />

          <v-select
            :items="brandList"
            v-model="item.brand"
            label="select brand"
            single-line
            bottom
            required
            :rules="[() => !!item.brand || 'This field is required']"
          />

          <v-text-field 
            required
            v-model.number.lazy="item.price"
            label="price грн"
            :rules="[() => !!item.price || 'This field is required']"
          />

          <v-select
            :items="colors"
            v-model="item.color"
            label="select color"
            single-line
            bottom
            required
            :rules="[() => !!item.color || 'This field is required']"
          />
          
          <v-text-field 
            required
            v-model.number.lazy="item.length"
            label="item length см"
            :rules="[() => !!item.length || 'This field is required']"
          />

          <app-create>
            <v-card-text slot="size">XS</v-card-text>
            <v-text-field 
              v-model.number.lazy="xs.shoulders"
              label="Плечи"
              slot="shoulders"
            />
            <v-text-field 
              v-model.number.lazy="xs.breast"
              label="Грудь"
              slot="breast"
            />
            <v-text-field 
              v-model.number.lazy="xs.waist"
              label="Талия"
              slot="waist"
            />
            <v-text-field 
              v-model.number.lazy="xs.hips"
              label="Бедра"
              slot="hips"
            />
          </app-create>

          <app-create>
            <v-card-text slot="size">S</v-card-text>
            <v-text-field 
              v-model.number.lazy="s.shoulders" 
              label="Плечи" 
              slot="shoulders" />
            <v-text-field 
              v-model.number.lazy="s.breast" 
              label="Грудь" 
              slot="breast" />
            <v-text-field 
              v-model.number.lazy="s.waist" 
              label="Талия" 
              slot="waist" />
            <v-text-field 
              v-model.number.lazy="s.hips"
              label="Бедра" 
              slot="hips" />
          </app-create>

          <app-create>
            <v-card-text slot="size">M</v-card-text>
            <v-text-field 
              v-model.number.lazy="m.shoulders" 
              label="Плечи" 
              slot="shoulders" />
            <v-text-field 
              v-model.number.lazy="m.breast" 
              label="Грудь" 
              slot="breast" />
            <v-text-field 
              v-model.number.lazy="m.waist" 
              label="Талия" 
              slot="waist" />
            <v-text-field 
              v-model.number.lazy="m.hips" 
              label="Бедра" 
              slot="hips" />
          </app-create>

          <app-create>
            <v-card-text slot="size">L</v-card-text>
            <v-text-field 
              v-model.number.lazy="l.shoulders" 
              label="Плечи" slot="shoulders" />
            <v-text-field 
              v-model.number.lazy="l.breast" 
              label="Грудь" 
              slot="breast" />
            <v-text-field 
              v-model.number.lazy="l.waist" 
              label="Талия" 
              slot="waist" />
            <v-text-field 
              v-model.number.lazy="l.hips" 
              label="Бедра" 
              slot="hips" />
          </app-create>

          <v-btn
            color="primary"
            type="submit"
            :disabled="!isFilled"
          >Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { withHeaders } from '@/services/api';
import { SessionStorage } from '@/utils/storage';
import { colors, typeList, brandList } from '@/utils/data';

import createContainer from '../Templates/CreateContainer';
import AlertSuccess from '../Shared/Alerts/AlertSuccessful';

export default {
  components: {
    'app-create': createContainer,
    'app-success': AlertSuccess,
  },
  data() {
    return {
      isSuccess: false,
      error: '',
      typeList,
      brandList,
      colors,
      item: {
        title: '',
        type: '',
        link: '',
        src: '',
        sizes: [],
        brand: '',
        price: null,
        color: '',
        length: null,
      },
      xs: {
        size: 'XS',
      },
      s: {
        size: 'S',
      },
      m: {
        size: 'M',
      },
      l: {
        size: 'L',
      },
    };
  },
  computed: {
    isError() {
      return this.error;
    },
    isOk() {
      return this.isSuccess;
    },
    isFilled() {
      const i = this.item;
      return i.type && i.title && i.src && i.link && i.brand && i.price && i.color && i.length;
    },
    itemType() {
      return this.item.type;
    },
  },
  methods: {
    async addToBase() {
      try {
        const token = `Bearer ${SessionStorage.get('AuthToken')}`;
        if (this.item.sizes.length < 1) {
          this.item.sizes.push(this.xs, this.s, this.m, this.l);
        }
        await withHeaders(token).post('/products', this.item);
        this.isSuccess = true;

        this.item = {
          title: '',
          type: '',
          link: '',
          src: '',
          sizes: [],
          brand: '',
          price: null,
          color: '',
          length: null,
        };

        this.$store.commit('addElementToItemsInState', this.item);
        setTimeout(() => {
          this.isSuccess = false;
        }, 2000);
      } catch (err) {
        this.isSuccess = false;
        this.item.sizes = [];
        this.error = err.response.data.error.message;
        throw new Error('Something bad happened', err);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
