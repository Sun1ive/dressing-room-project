<template>
  <v-container fluid>


    <v-layout class="mt-3" justify-center align-center row wrap>
      <app-Breast @setBreast="setBreast" />
    </v-layout>

    <v-layout justify-center align-center row wrap>
      <app-Waist @setWaist="setWaist" />
    </v-layout>

    <v-layout justify-center align-center row wrap>
      <app-Hips @setHips="setHips" />
    </v-layout>

    <v-layout justify-center align-center class="my-3">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card>
          <v-card-text>
          Ваш итоговый размер <strong>{{ getSize }}</strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
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
      breast: '',
      waist: '',
      hips: '',
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