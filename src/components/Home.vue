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
          <v-card height="600">
            <v-card-media height="400" :src="item.src"></v-card-media>
            <v-card-text>{{ item.size }}</v-card-text>
            <v-card-text><a :href="item.link">{{ item.title }}</a></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="item.link" target="_blank">Купить</v-btn>
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
import { each } from 'lodash';

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
      breast: {
        size: null,
        number: null,
      },
      waist: {
        size: null,
        number: null,
      },
      hips: {
        size: null,
        number: null,
      },
      isActive: true,
      showLoader: false,
      showLinks: false,
      items: [],
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
    filterData(data) {
      each(data, item => {
        each(item, x => {
          each(x.grids, size => {
            if (this.breast.number <= size.breast &&
              this.hips.number <= size.hips &&
              this.waist.number <= size.waist) {
              this.items.push({
                title: x.title,
                src: x.src,
                link: x.link,
                size: size.size,
              });
              console.log(this.items);
            }
          });
        });
      });
      // this.items.pop();
    },
    async showDresses() {
      this.isActive = false;
      setTimeout(() => {
        this.showLoader = true;
      }, 500);
      
      try {
        const response = await axios.get('https://dressing-room-f35be.firebaseio.com/dresses.json');
        const data = response.data;
        this.filterData(data);

        // console.log('breast', this.breast.number);
        // console.log('bedra', this.hips.number);
        // console.log('talia', this.waist.number);

        // console.log(data);


        // const response = await axios.get('https://woonode.herokuapp.com/woo');
        // const response = await axios.get('http://localhost:8081/woo');
        // this.items = await response.data.filter(x => x.short);
        // this.items = await response.data.slice(0, 2);

        // each(data, x => {
        //   each(x, item => {
        //     if (this.breast.number <= item.gridXS.b) {
        //       this.items.push(item);
        //     }
        //   });
        // });
        // console.log(this.items);

        setTimeout(() => {
          this.showLoader = false;
          setTimeout(() => {
            this.showLinks = true;
          }, 500);
        }, 1000);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  computed: {
    getSize() {
      let size = '';
      if (this.breast.size === 'XS' && this.hips.size === 'XS' && this.waist.size === 'XS') {
        size = '1 S';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'XS' && this.waist.size === 'S') {
        size = '2';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'XS' && this.waist.size === 'M') {
        size = '3';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'XS' && this.waist.size === 'L') {
        size = '4';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'S' && this.waist.size === 'XS') {
        size = '5';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'S' && this.waist.size === 'S') {
        size = '6';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'S' && this.waist.size === 'M') {
        size = '7';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'S' && this.waist.size === 'L') {
        size = '8';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'M' && this.waist.size === 'XS') {
        size = '9';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'M' && this.waist.size === 'S') {
        size = '10';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'M' && this.waist.size === 'M') {
        size = '11';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'M' && this.waist.size === 'L') {
        size = '12';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'L' && this.waist.size === 'XS') {
        size = '13';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'L' && this.waist.size === 'S') {
        size = '14';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'L' && this.waist.size === 'M') {
        size = '15';
      }
      if (this.breast.size === 'XS' && this.hips.size === 'L' && this.waist.size === 'L') {
        size = '16';
      }
      if (this.breast.size === 'S' && this.hips.size === 'XS' && this.waist.size === 'XS') {
        size = '17';
      }
      if (this.breast.size === 'S' && this.hips.size === 'XS' && this.waist.size === 'S') {
        size = '18';
      }
      if (this.breast.size === 'S' && this.hips.size === 'XS' && this.waist.size === 'M') {
        size = '19';
      }
      if (this.breast.size === 'S' && this.hips.size === 'XS' && this.waist.size === 'L') {
        size = '20';
      }
      if (this.breast.size === 'S' && this.hips.size === 'S' && this.waist.size === 'XS') {
        size = '21';
      }
      if (this.breast.size === 'S' && this.hips.size === 'S' && this.waist.size === 'S') {
        size = '22 S';
      }
      if (this.breast.size === 'S' && this.hips.size === 'S' && this.waist.size === 'M') {
        size = '23';
      }
      if (this.breast.size === 'S' && this.hips.size === 'S' && this.waist.size === 'L') {
        size = '24';
      }
      if (this.breast.size === 'S' && this.hips.size === 'M' && this.waist.size === 'XS') {
        size = '25';
      }
      if (this.breast.size === 'S' && this.hips.size === 'M' && this.waist.size === 'S') {
        size = '26';
      }
      if (this.breast.size === 'S' && this.hips.size === 'M' && this.waist.size === 'M') {
        size = '27';
      }
      if (this.breast.size === 'S' && this.hips.size === 'M' && this.waist.size === 'L') {
        size = '28';
      }
      if (this.breast.size === 'S' && this.hips.size === 'L' && this.waist.size === 'XS') {
        size = '29';
      }
      if (this.breast.size === 'S' && this.hips.size === 'L' && this.waist.size === 'S') {
        size = '30';
      }
      if (this.breast.size === 'S' && this.hips.size === 'L' && this.waist.size === 'M') {
        size = '31';
      }
      if (this.breast.size === 'S' && this.hips.size === 'L' && this.waist.size === 'L') {
        size = '32';
      }
      if (this.breast.size === 'M' && this.hips.size === 'XS' && this.waist.size === 'XS') {
        size = '33';
      }
      if (this.breast.size === 'M' && this.hips.size === 'XS' && this.waist.size === 'S') {
        size = '34';
      }
      if (this.breast.size === 'M' && this.hips.size === 'XS' && this.waist.size === 'M') {
        size = '35';
      }
      if (this.breast.size === 'M' && this.hips.size === 'XS' && this.waist.size === 'L') {
        size = '36';
      }
      if (this.breast.size === 'M' && this.hips.size === 'S' && this.waist.size === 'XS') {
        size = '37';
      }
      if (this.breast.size === 'M' && this.hips.size === 'S' && this.waist.size === 'S') {
        size = '38';
      }
      if (this.breast.size === 'M' && this.hips.size === 'S' && this.waist.size === 'M') {
        size = '39';
      }
      if (this.breast.size === 'M' && this.hips.size === 'S' && this.waist.size === 'L') {
        size = '40';
      }
      if (this.breast.size === 'M' && this.hips.size === 'M' && this.waist.size === 'XS') {
        size = '41';
      }
      if (this.breast.size === 'M' && this.hips.size === 'M' && this.waist.size === 'S') {
        size = '42';
      }
      if (this.breast.size === 'M' && this.hips.size === 'M' && this.waist.size === 'M') {
        size = '43 M';
      }
      if (this.breast.size === 'M' && this.hips.size === 'M' && this.waist.size === 'L') {
        size = '44';
      }
      if (this.breast.size === 'M' && this.hips.size === 'L' && this.waist.size === 'XS') {
        size = '45';
      }
      if (this.breast.size === 'M' && this.hips.size === 'L' && this.waist.size === 'S') {
        size = '46';
      }
      if (this.breast.size === 'M' && this.hips.size === 'L' && this.waist.size === 'M') {
        size = '47';
      }
      if (this.breast.size === 'M' && this.hips.size === 'L' && this.waist.size === 'L') {
        size = '48';
      }
      if (this.breast.size === 'L' && this.hips.size === 'XS' && this.waist.size === 'XS') {
        size = '49';
      }
      if (this.breast.size === 'L' && this.hips.size === 'XS' && this.waist.size === 'S') {
        size = '50';
      }
      if (this.breast.size === 'L' && this.hips.size === 'XS' && this.waist.size === 'M') {
        size = '51';
      }
      if (this.breast.size === 'L' && this.hips.size === 'XS' && this.waist.size === 'L') {
        size = '52';
      }
      if (this.breast.size === 'L' && this.hips.size === 'S' && this.waist.size === 'XS') {
        size = '53';
      }
      if (this.breast.size === 'L' && this.hips.size === 'S' && this.waist.size === 'S') {
        size = '54';
      }
      if (this.breast.size === 'L' && this.hips.size === 'S' && this.waist.size === 'M') {
        size = '55';
      }
      if (this.breast.size === 'L' && this.hips.size === 'S' && this.waist.size === 'L') {
        size = '56';
      }
      if (this.breast.size === 'L' && this.hips.size === 'M' && this.waist.size === 'XS') {
        size = '57';
      }
      if (this.breast.size === 'L' && this.hips.size === 'M' && this.waist.size === 'S') {
        size = '58';
      }
      if (this.breast.size === 'L' && this.hips.size === 'M' && this.waist.size === 'M') {
        size = '59';
      }
      if (this.breast.size === 'L' && this.hips.size === 'M' && this.waist.size === 'L') {
        size = '60';
      }
      if (this.breast.size === 'L' && this.hips.size === 'L' && this.waist.size === 'XS') {
        size = '61';
      }
      if (this.breast.size === 'L' && this.hips.size === 'L' && this.waist.size === 'S') {
        size = '62';
      }
      if (this.breast.size === 'L' && this.hips.size === 'L' && this.waist.size === 'M') {
        size = '63';
      }
      if (this.breast.size === 'L' && this.hips.size === 'L' && this.waist.size === 'L') {
        size = '64 L';
      }
      return size;
    },
  },
};
</script>


<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>