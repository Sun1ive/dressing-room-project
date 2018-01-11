<template>
  <v-container fluid>
    <v-layout justify-center align-center >
      <v-flex xs10 sm6 lg4>
        <v-alert
          v-if="isError.length > 0"
          color="error" 
          icon="warning" 
          value="true"
        >
          {{ isError }}
        </v-alert>
      </v-flex>    
    </v-layout>
    <v-layout class="pt-5" justify-center align-center>
      <v-flex xs10 sm8 lg6>
        <v-form
          class="form text-xs-center" 
          @submit.prevent="addToBase"
        >
          <h1>Форма добавления вещи в базу</h1>

          <p>Параметры которых нет, можно не указывать</p>

          <v-select
            :items="typeList"
            v-model="item.type"
            label="select type"
            single-line
            bottom
            required
          ></v-select>
          <v-text-field required v-model.lazy="item.title" label="title" />
          <v-text-field required v-model.lazy="item.src" label="src" />
          <v-text-field required v-model.lazy="item.link" label="link" />
          <v-select
            :items="brandList"
            v-model="item.brand"
            label="select brand"
            single-line
            bottom
            required
          ></v-select>
          <v-text-field required v-model.number.lazy="item.price" label="price грн" />
          <v-text-field required v-model.lazy="item.color" label="color" />
          <v-text-field required v-model.number.lazy="item.length" label="item length см" />

          <app-create>
            <v-card-text slot="size">XS</v-card-text>
            <v-text-field v-model.number.lazy="xs.shoulders" label="Плечи" slot="shoulders" />
            <v-text-field v-model.number.lazy="xs.breast" label="Грудь" slot="breast" />
            <v-text-field v-model.number.lazy="xs.waist" label="Талия" slot="waist" />
            <v-text-field v-model.number.lazy="xs.hips" label="Бедра" slot="hips" />
          </app-create>

          <app-create>
            <v-card-text slot="size">S</v-card-text>
            <v-text-field v-model.number.lazy="s.shoulders" label="Плечи" slot="shoulders" />
            <v-text-field v-model.number.lazy="s.breast" label="Грудь" slot="breast" />
            <v-text-field v-model.number.lazy="s.waist" label="Талия" slot="waist" />
            <v-text-field v-model.number.lazy="s.hips" label="Бедра" slot="hips" />
          </app-create>

          <app-create>
            <v-card-text slot="size">M</v-card-text>
            <v-text-field v-model.number.lazy="m.shoulders" label="Плечи" slot="shoulders" />
            <v-text-field v-model.number.lazy="m.breast" label="Грудь" slot="breast" />
            <v-text-field v-model.number.lazy="m.waist" label="Талия" slot="waist" />
            <v-text-field v-model.number.lazy="m.hips" label="Бедра" slot="hips" />
          </app-create>

          <app-create>
            <v-card-text slot="size">L</v-card-text>
            <v-text-field v-model.number.lazy="l.shoulders" label="Плечи" slot="shoulders" />
            <v-text-field v-model.number.lazy="l.breast" label="Грудь" slot="breast" />
            <v-text-field v-model.number.lazy="l.waist" label="Талия" slot="waist" />
            <v-text-field v-model.number.lazy="l.hips" label="Бедра" slot="hips" />
          </app-create>

          <v-btn
            color="primary"
            type="submit"
          >Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { withHeaders } from '../../services/api';
import { SessionStorage } from '@/utils/storage';

import createContainer from '../templates/CreateContainer';

export default {
  components: {
    'app-create': createContainer,
  },
  data() {
    return {
      error: '',
      typeList: ['Плечевые', 'Поясные'],
      brandList: ['inDresser'],
      item: {
        sizes: [],
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
  methods: {
    async addToBase() {
      try {
        const token = `Bearer ${SessionStorage.get('AuthToken')}`;

        if (this.item.sizes.length < 1) {
          this.item.sizes.push(this.xs, this.s, this.m, this.l);
        }
        await withHeaders(token).post('/products', this.item);
        /*    this.item = {
          title: '',
          type: '',
          link: '',
          src: '',
          sizes: [],
          brand: '',
          price: null,
          color: '',
          length: null,
        }; */

        this.$store.commit('addElementToItemsInState', this.item);
      } catch (err) {
        this.item.sizes = [];
        this.error = err.response.data.error.message;
        throw new Error('Something bad happened', err);
      }
    },
  },
  computed: {
    isError() {
      return this.error;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
