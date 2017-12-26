<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <v-form class="form" @submit.prevent="addToBase">

          <v-text-field v-model.lazy="item.title" label="title"></v-text-field>
          <v-text-field v-model.number.lazy="item.id" label="id"></v-text-field>
          <v-text-field v-model.lazy="item.src" label="src"></v-text-field>
          <v-text-field v-model.lazy="item.link" label="link"></v-text-field>
          <v-text-field v-model.lazy="item.brand" label="brand"></v-text-field>
          <v-text-field v-model.number.lazy="item.price" label="price"></v-text-field>
          <v-text-field v-model.lazy="item.color" label="color"></v-text-field>

          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>XS</v-card-text>
                <v-layout justify-center>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.hips" label="Бедра"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.arm" label="Рука"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>S</v-card-text>
                <v-layout justify-center>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="s.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="s.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="s.hips" label="Бедра"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="s.arm" label="Рука"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>M</v-card-text>
                <v-layout justify-center>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="m.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="m.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="m.hips" label="Бедра"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="m.arm" label="Рука"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>L</v-card-text>
                <v-layout justify-center>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="l.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="l.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="l.hips" label="Бедра"></v-text-field>
                  </v-flex>
                  <v-flex xs2 class="mx-2">
                    <v-text-field v-model.number.lazy="l.arm" label="Рука"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>

          <v-btn color="primary" type="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { withAuth } from '../../services/api'

export default {
  data() {
    return {
      item: {
        title: '',
        link: '',
        id: null,
        src: '',
        sizes: [],
        brand: '',
        price: null,
        color: '',
      },
      xs: {
        size: 'XS',
        breast: null,
        waist: null,
        hips: null,
        arm: null,
      },
      s: {
        size: 'S',
        breast: null,
        waist: null,
        hips: null,
        arm: null,
      },
      m: {
        size: 'M',
        breast: null,
        waist: null,
        hips: null,
        arm: null,
      },
      l: {
        size: 'L',
        breast: null,
        waist: null,
        hips: null,
        arm: null,
      },
    };
  },
  methods: {
    async addToBase() {
      try {
        const credentials = JSON.parse(window.sessionStorage.getItem('userAdminCredentials'));

        this.item.sizes.push(this.xs, this.s, this.m, this.l);

        await withAuth(credentials.username, credentials.password).post('/products', this.item);

        this.item = {
          title: '',
          link: '',
          id: null,
          src: '',
          sizes: [],
          brand: '',
          price: null,
          color: ''
        };
        this.xs = {
          size: 'XS',
          breast: null,
          waist: null,
          hips: null,
          arm: null,
        };
        this.s = {
          size: 'S',
          breast: null,
          waist: null,
          hips: null,
          arm: null,
        };
        this.m = {
          size: 'M',
          breast: null,
          waist: null,
          hips: null,
          arm: null,
        };
        this.l = {
          size: 'L',
          breast: null,
          waist: null,
          hips: null,
          arm: null,
        };
      } catch (error) {
        throw new Error('Something bad happened ', error);
      }
    },
  },
};
</script>

<style scoped lang="stylus">

</style>
