<template>
<div class="education">
    <v-container>
    <h3 class="text-center">EDUCATION</h3>
    <v-row class="d-flex justify-center my-3">
        <v-card width="500">

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Year
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      <router-link :to="{name:'education'}">
        <v-card-actions>
      <v-btn
        class="teal--text"
        text
        block
      >
        More
      </v-btn>   
    </v-card-actions>
        </router-link>
      </v-card>
      </v-row>
    </v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
      messages: [
              {
                from: 'Mts Nu TBS Kudus',
                message: `Jl. KH. Turaichan Adjhuri No.23, Pejaten, Kajeksan, Kec. Kota Kudus`,
                time: '2011',
                color: 'green lighten-1',
              },
              {
                from: 'MA NU TBS Kudus',
                message: 'Jl. KH. Turaichan Adjhuri No.164, Pejaten, Kajeksan, Kec. Kota Kudus, Kabupaten Kudus',
                time: '2014',
                color: 'green lighten-1',
              },
              {
                from: 'Universitas AMIKOM Yogyakarta',
                message: 'Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
                time: '2017',
                color: 'purple lighten-1',
              },
            ],
      }
    },
  }
</script>