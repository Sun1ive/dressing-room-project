<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 lg4 class="text-xs-center">
        <h1>Форма редактирования вещи</h1>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg4>
        <v-form class="form" @submit.prevent="onEdit">

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
          <v-text-field required v-model.number.lazy="item.price" label="price" />
          <v-text-field required v-model.lazy="item.color" label="color" />

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
import createContainer from '../templates/createContainer';
import { withAuth } from '../../services/api';
import { SessionStorage } from '../../utils/storage';

export default {
  components: {
    'app-create': createContainer,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      brandList: ['inDresser'],
      typeList: ['Плечевые', 'Поясные'],
      item: {},
      xs: {},
      s: {},
      m: {},
      l: {},
    };
  },
  methods: {
    async onEdit() {
      try {
        const c = SessionStorage.get('userAdminCredentials');
        this.item.sizes.push(this.xs, this.s, this.m, this.l);

        await withAuth(c.username, c.password).patch(`/products/${this.id}`, this.item);

        this.$store.dispatch('getDresses');
        this.$router.push('/admin/view');
      } catch (error) {
        throw new Error('Something bad happened ', error);
      }
    },
  },
  created() {
    const item = this.$store.getters.items.filter(x => x._id === this.id);
    
    item.forEach(x => {
      x.sizes.forEach(size => {
        this.item = {
          title: x.title,
          type: x.type,
          link: x.link,
          src: x.src,
          sizes: [],
          brand: x.brand,
          price: x.price,
          color: x.color,
        };
        switch (size.size) {
          case 'XS':
            this.xs = {
              size: 'XS',
              breast: size.breast,
              waist: size.waist,
              hips: size.hips,
              shoulders: size.shoulders,
            };
            break;
          case 'S':
            this.s = {
              size: 'S',
              breast: size.breast,
              waist: size.waist,
              hips: size.hips,
              shoulders: size.shoulders,
            };
            break;
          case 'M':
            this.m = {
              size: 'M',
              breast: size.breast,
              waist: size.waist,
              hips: size.hips,
              shoulders: size.shoulders,
            };
            break;
          case 'L':
            this.l = {
              size: 'L',
              breast: size.breast,
              waist: size.waist,
              hips: size.hips,
              shoulders: size.shoulders,
            };
            break;
          default:
            break;
        }
      });
    });
  },
};
</script>

<style scoped>

</style>
