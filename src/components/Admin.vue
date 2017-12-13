<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6>
        <v-form @submit.prevent="addToBase">
          <v-text-field v-model="item.title" label="title"></v-text-field>
          <v-text-field v-model="item.link" label="link"></v-text-field>
          
          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center">
              <v-card>
                <v-card-text>XS</v-card-text>
                <v-layout justify-center>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.xs.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.xs.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.xs.hips" label="Бедра"></v-text-field>
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
                    <v-text-field v-model="item.s.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.s.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.s.hips" label="Бедра"></v-text-field>
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
                    <v-text-field v-model="item.m.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.m.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.m.hips" label="Бедра"></v-text-field>
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
                    <v-text-field v-model="item.l.breast" label="Грудь"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.l.waist" label="Талия"></v-text-field>
                  </v-flex>
                  <v-flex xs3 class="mx-2">
                    <v-text-field v-model="item.l.hips" label="Бедра"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>



          <v-btn color="primary" right type="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '',
        link: '',
        xs: {
          breast: '',
          waist: '',
          hips: '',
        },
        s: {
          breast: '',
          waist: '',
          hips: '',
        },
        m: {
          breast: '',
          waist: '',
          hips: '',
        },
        l: {
          breast: '',
          waist: '',
          hips: '',
        },
        sizes: [],
      },
    };
  },
  methods: {
    addToBase() {
      this.item.sizes.push(this.item.xs, this.item.s,this.item.m,this.item.l)
      console.log(this.item.sizes);
    }
  },
};
</script>


<style scoped lang="stylus"></style>