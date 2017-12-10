<template>
  <v-container fluid>

  <transition name="fade">
    <v-container v-if="isActive">

      <app-Breast @setBreast="setBreast"></app-Breast>
      <app-Waist @setWaist="setWaist"></app-Waist>
      <app-Hips @setHips="setHips"></app-Hips>

      <v-layout justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-card>
            <v-card-text>
            Ваш итоговый размер <strong>{{ getSize }}</strong>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-btn color="primary" @click="showDresses">Посмотреть</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </transition>

  <transition name="fade">
    <app-loader v-if="showLoader"></app-loader>
  </transition>

    <v-container grid-list-xl v-if="showLinks">
      <v-layout justify-center align-center wrap>
        <v-flex xs12 sm4 v-for="(item, i) in items" :key="i" class="text-xs-center">
          <v-card height="550">
            <v-card-media height="400" :src="item.src"></v-card-media>
            <v-card-text><a :href="item.link">{{ item.title }}</a></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="item.link">Купить</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>


<script>
import axios from 'axios';

import Breast from './views/Breast';
import Waist from './views/Waist';
import Hips from './views/Hips';

export default {
  components: {
    'app-Breast': Breast,
    'app-Waist': Waist,
    'app-Hips': Hips,
  },
  data() {
    return {
      breast: null,
      waist: null,
      hips: null,
      isActive: true,
      showLoader: false,
      showLinks: false,
      items: [],
      imgs: [],
    };
  },
  methods: {
    setBreast(value) {
      this.breast = value;
    },
    setWaist(value) {
      this.waist = value;
    },
    setHips(value) {
      this.hips = value;
    },
    async showDresses() {
      this.isActive = false;
      setTimeout(() => {
        this.showLoader = true;
      }, 500);
      try {
        const response = await axios.get('https://woonode.herokuapp.com/woo');
        this.items = response.data.filter(x => x.price <= 900)
        this.showLoader = false;
        this.showLinks = true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  computed: {
    getSize() {
      let size = '';
      if (this.breast === 'XS' && this.hips === 'XS' && this.waist === 'XS') {
        size = '1 S';
      }
      if (this.breast === 'XS' && this.hips === 'XS' && this.waist === 'S') {
        size = '2';
      }
      if (this.breast === 'XS' && this.hips === 'XS' && this.waist === 'M') {
        size = '3';
      }
      if (this.breast === 'XS' && this.hips === 'XS' && this.waist === 'L') {
        size = '4';
      }
      if (this.breast === 'XS' && this.hips === 'S' && this.waist === 'XS') {
        size = '5';
      }
      if (this.breast === 'XS' && this.hips === 'S' && this.waist === 'S') {
        size = '6';
      }
      if (this.breast === 'XS' && this.hips === 'S' && this.waist === 'M') {
        size = '7';
      }
      if (this.breast === 'XS' && this.hips === 'S' && this.waist === 'L') {
        size = '8';
      }
      if (this.breast === 'XS' && this.hips === 'M' && this.waist === 'XS') {
        size = '9';
      }
      if (this.breast === 'XS' && this.hips === 'M' && this.waist === 'S') {
        size = '10';
      }
      if (this.breast === 'XS' && this.hips === 'M' && this.waist === 'M') {
        size = '11';
      }
      if (this.breast === 'XS' && this.hips === 'M' && this.waist === 'L') {
        size = '12';
      }
      if (this.breast === 'XS' && this.hips === 'L' && this.waist === 'XS') {
        size = '13';
      }
      if (this.breast === 'XS' && this.hips === 'L' && this.waist === 'S') {
        size = '14';
      }
      if (this.breast === 'XS' && this.hips === 'L' && this.waist === 'M') {
        size = '15';
      }
      if (this.breast === 'XS' && this.hips === 'L' && this.waist === 'L') {
        size = '16';
      }
      if (this.breast === 'S' && this.hips === 'XS' && this.waist === 'XS') {
        size = '17';
      }
      if (this.breast === 'S' && this.hips === 'XS' && this.waist === 'S') {
        size = '18';
      }
      if (this.breast === 'S' && this.hips === 'XS' && this.waist === 'M') {
        size = '19';
      }
      if (this.breast === 'S' && this.hips === 'XS' && this.waist === 'L') {
        size = '20';
      }
      if (this.breast === 'S' && this.hips === 'S' && this.waist === 'XS') {
        size = '21';
      }
      if (this.breast === 'S' && this.hips === 'S' && this.waist === 'S') {
        size = '22 S';
      }
      if (this.breast === 'S' && this.hips === 'S' && this.waist === 'M') {
        size = '23';
      }
      if (this.breast === 'S' && this.hips === 'S' && this.waist === 'L') {
        size = '24';
      }
      if (this.breast === 'S' && this.hips === 'M' && this.waist === 'XS') {
        size = '25';
      }
      if (this.breast === 'S' && this.hips === 'M' && this.waist === 'S') {
        size = '26';
      }
      if (this.breast === 'S' && this.hips === 'M' && this.waist === 'M') {
        size = '27';
      }
      if (this.breast === 'S' && this.hips === 'M' && this.waist === 'L') {
        size = '28';
      }
      if (this.breast === 'S' && this.hips === 'L' && this.waist === 'XS') {
        size = '29';
      }
      if (this.breast === 'S' && this.hips === 'L' && this.waist === 'S') {
        size = '30';
      }
      if (this.breast === 'S' && this.hips === 'L' && this.waist === 'M') {
        size = '31';
      }
      if (this.breast === 'S' && this.hips === 'L' && this.waist === 'L') {
        size = '32';
      }
      if (this.breast === 'M' && this.hips === 'XS' && this.waist === 'XS') {
        size = '33';
      }
      if (this.breast === 'M' && this.hips === 'XS' && this.waist === 'S') {
        size = '34';
      }
      if (this.breast === 'M' && this.hips === 'XS' && this.waist === 'M') {
        size = '35';
      }
      if (this.breast === 'M' && this.hips === 'XS' && this.waist === 'L') {
        size = '36';
      }
      if (this.breast === 'M' && this.hips === 'S' && this.waist === 'XS') {
        size = '37';
      }
      if (this.breast === 'M' && this.hips === 'S' && this.waist === 'S') {
        size = '38';
      }
      if (this.breast === 'M' && this.hips === 'S' && this.waist === 'M') {
        size = '39';
      }
      if (this.breast === 'M' && this.hips === 'S' && this.waist === 'L') {
        size = '40';
      }
      if (this.breast === 'M' && this.hips === 'M' && this.waist === 'XS') {
        size = '41';
      }
      if (this.breast === 'M' && this.hips === 'M' && this.waist === 'S') {
        size = '42';
      }
      if (this.breast === 'M' && this.hips === 'M' && this.waist === 'M') {
        size = '43 M';
      }
      if (this.breast === 'M' && this.hips === 'M' && this.waist === 'L') {
        size = '44';
      }
      if (this.breast === 'M' && this.hips === 'L' && this.waist === 'XS') {
        size = '45';
      }
      if (this.breast === 'M' && this.hips === 'L' && this.waist === 'S') {
        size = '46';
      }
      if (this.breast === 'M' && this.hips === 'L' && this.waist === 'M') {
        size = '47';
      }
      if (this.breast === 'M' && this.hips === 'L' && this.waist === 'L') {
        size = '48';
      }
      if (this.breast === 'L' && this.hips === 'XS' && this.waist === 'XS') {
        size = '49';
      }
      if (this.breast === 'L' && this.hips === 'XS' && this.waist === 'S') {
        size = '50';
      }
      if (this.breast === 'L' && this.hips === 'XS' && this.waist === 'M') {
        size = '51';
      }
      if (this.breast === 'L' && this.hips === 'XS' && this.waist === 'L') {
        size = '52';
      }
      if (this.breast === 'L' && this.hips === 'S' && this.waist === 'XS') {
        size = '53';
      }
      if (this.breast === 'L' && this.hips === 'S' && this.waist === 'S') {
        size = '54';
      }
      if (this.breast === 'L' && this.hips === 'S' && this.waist === 'M') {
        size = '55';
      }
      if (this.breast === 'L' && this.hips === 'S' && this.waist === 'L') {
        size = '56';
      }
      if (this.breast === 'L' && this.hips === 'M' && this.waist === 'XS') {
        size = '57';
      }
      if (this.breast === 'L' && this.hips === 'M' && this.waist === 'S') {
        size = '58';
      }
      if (this.breast === 'L' && this.hips === 'M' && this.waist === 'M') {
        size = '59';
      }
      if (this.breast === 'L' && this.hips === 'M' && this.waist === 'L') {
        size = '60';
      }
      if (this.breast === 'L' && this.hips === 'L' && this.waist === 'XS') {
        size = '61';
      }
      if (this.breast === 'L' && this.hips === 'L' && this.waist === 'S') {
        size = '62';
      }
      if (this.breast === 'L' && this.hips === 'L' && this.waist === 'M') {
        size = '63';
      }
      if (this.breast === 'L' && this.hips === 'L' && this.waist === 'L') {
        size = '64 L';
      }
      return size;
    },
  },
};
</script>


<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>