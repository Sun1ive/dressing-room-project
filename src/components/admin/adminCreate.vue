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
      <v-flex xs10 md6 lg4 class="text-xs-center">
        <v-btn 
          @click="select = !select"
          color="primary"
        >Change</v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center v-if="select">
      <v-flex xs10 sm6 lg4>
        <v-form
          class="form text-xs-center" 
          @submit.prevent="addToBaseHumeral"
        >
          <h1>Форма добавления вещи в базу</h1>
          <h2>Плечевые изделия</h2>
          <v-text-field v-model.lazy="item.title" label="title" />
          <v-text-field v-model.lazy="item.src" label="src" />
          <v-text-field v-model.lazy="item.link" label="link" />
          <v-text-field v-model.lazy="item.brand" label="brand" />
          <v-text-field v-model.number.lazy="item.price" label="price грн" />
          <v-text-field v-model.lazy="item.color" label="color" />
          <v-text-field v-model.number.lazy="item.length" label="item length см" />

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

    <!-- second form -->
    <v-layout justify-center align-center v-if="!select">
      <v-flex xs10 sm6 lg4>
        <v-form
          class="form text-xs-center" 
          @submit.prevent="addToBaseLumbar"
        >
          <h1>Форма добавления вещи в базу</h1>
          <h2>Поясные изделия</h2>
          <v-text-field v-model.lazy="item.title" label="title" />
          <v-text-field v-model.lazy="item.src" label="src" />
          <v-text-field v-model.lazy="item.link" label="link" />
          <v-text-field v-model.lazy="item.brand" label="brand" />
          <v-text-field v-model.number.lazy="item.price" label="price грн" />
          <v-text-field v-model.lazy="item.color" label="color" />
          <v-text-field v-model.number.lazy="item.length" label="item length см" />

          <app-create>
            <v-card-text slot="bottom-size">XS</v-card-text>
            <v-text-field v-model.number.lazy="l.waist" label="Талия" slot="bottom-waist" />
            <v-text-field v-model.number.lazy="l.hips" label="Бедра" slot="bottom-hips" />
          </app-create>

          <app-create>
            <v-card-text slot="bottom-size">S</v-card-text>
            <v-text-field v-model.number.lazy="l.waist" label="Талия" slot="bottom-waist" />
            <v-text-field v-model.number.lazy="l.hips" label="Бедра" slot="bottom-hips" />
          </app-create>

          <app-create>
            <v-card-text slot="bottom-size">M</v-card-text>
            <v-text-field v-model.number.lazy="l.waist" label="Талия" slot="bottom-waist" />
            <v-text-field v-model.number.lazy="l.hips" label="Бедра" slot="bottom-hips" />
          </app-create>

          <app-create>
            <v-card-text slot="bottom-size">L</v-card-text>
            <v-text-field v-model.number.lazy="l.waist" label="Талия" slot="bottom-waist" />
            <v-text-field v-model.number.lazy="l.hips" label="Бедра" slot="bottom-hips" />
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
import { withAuth } from '../../services/api';
import { SessionStorage } from '@/utils/storage';

import createContainer from '../templates/createContainer';

export default {
  components: {
    'app-create': createContainer,
  },
  data() {
    return {
      error: '',
      select: false,
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
    async addToBaseHumeral() {
      try {
        const c = SessionStorage.get('userAdminCredentials');
        this.item.sizes.push(this.xs, this.s, this.m, this.l);
        this.item.type = 'humeral';

        await withAuth(c.username, c.password).post('/products', this.item);

        this.item = {
          title: '',
          link: '',
          // id: null,
          src: '',
          sizes: [],
          brand: '',
          price: null,
          color: '',
          length: null,
        };

        this.xs = {
          size: 'XS',
          shoulders: null,
          breast: null,
          waist: null,
          hips: null,
        };
        this.s = {
          size: 'S',
          shoulders: null,
          breast: null,
          waist: null,
          hips: null,
        };
        this.m = {
          size: 'M',
          shoulders: null,
          breast: null,
          waist: null,
          hips: null,
        };
        this.l = {
          size: 'L',
          shoulders: null,
          breast: null,
          waist: null,
          hips: null,
        };
      } catch (err) {
        this.error = err.response.data.error.message;
        throw new Error('Something bad happened', err)
      }
    },
    async addToBaseLumbar() {
      try {
        const c = SessionStorage.get('userAdminCredentials');
        this.item.sizes.push(this.xs, this.s, this.m, this.l);
        this.item.type = 'lumbar';

        await withAuth(c.username, c.password).post('/products', this.item);
      } catch (err) {
        this.error = err.response.data.error.message;
        throw new Error('Something bad happened', err)
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
