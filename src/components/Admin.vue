<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8>
        <v-form @submit.prevent="addToBase">

          <v-text-field v-model.lazy="item.title" label="title"></v-text-field>
          <v-text-field v-model.number.lazy="item.id" label="id"></v-text-field>
          <v-text-field v-model.lazy="item.src" label="src"></v-text-field>
          <v-text-field v-model.lazy="item.link" label="link"></v-text-field>

          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>XS</v-card-text>
                <v-layout justify-center>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="xs.hips" label="Бедра"></v-text-field>
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
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="s.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="s.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="s.hips" label="Бедра"></v-text-field>
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
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="m.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="m.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="m.hips" label="Бедра"></v-text-field>
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
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="l.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="l.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model.number.lazy="l.hips" label="Бедра"></v-text-field>
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
import API from '../services/Api';

export default {
  data() {
    return {
      item: {
        title: '',
        link: '',
        id: null,
        src: '',
        sizes: [],
      },
      xs: {
        size: 'XS',
        breast: null,
        waist: null,
        hips: null,
      },
      s: {
        size: 'S',
        breast: null,
        waist: null,
        hips: null,
      },
      m: {
        size: 'M',
        breast: null,
        waist: null,
        hips: null,
      },
      l: {
        size: 'L',
        breast: null,
        waist: null,
        hips: null,
      },
    };
  },
  methods: {
    async addToBase() {
      try {
        await this.item.sizes.push(this.xs, this.s, this.m, this.l);
        await API().post('/products', this.item);
        this.item = {
          title: '',
          link: '',
          id: null,
          src: '',
          sizes: [],
        };

        this.xs = {
          size: 'XS',
          breast: null,
          waist: null,
          hips: null,
        };

        this.s = {
          size: 'S',
          breast: null,
          waist: null,
          hips: null,
        };
        this.m = {
          size: 'M',
          breast: null,
          waist: null,
          hips: null,
        };
        this.l = {
          size: 'L',
          breast: null,
          waist: null,
          hips: null,
        };
      } catch (error) {
        throw new Error('Something bad happened ', error);
      }
    },
  },
};
</script>


<style scoped lang="stylus"></style>
