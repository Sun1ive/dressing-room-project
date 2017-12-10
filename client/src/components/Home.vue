<template>
  <v-container fluid>
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
      breast: null,
      waist: null,
      hips: null,
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


<style scoped lang="stylus"></style>