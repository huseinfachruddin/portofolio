<template>
<div class="education teal--text fokus">
    <v-container>
    <h3 class="text-center">EDUCATION</h3>
        <v-timeline lazy  small dense>
    <div >
            <v-timeline-item color="teal" v-for="data in data" :key="data.year">
            <template >
                <span>{{data.year}}</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="body-1">
                {{data.education}}
                </v-card-title>
                <v-card-text>
                {{data.address}}
                </v-card-text>
            </v-card>
            </v-timeline-item>
    </div>
        </v-timeline>
    </v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
          data:[
            {
              year:"2005-2011",
              education:"MI Tarbiyatul Banin Pati",
              address:"Pekalongan RT 03 RW 02 Winong Pati"
            },
            {
              year:"20011-2014",
              education:"MTs NU TBS Kudus",
              address:"Jl. KH. Turaichan Adjhuri No.23, Pejaten, Kajeksan, Kec. Kota Kudus"
            },
            {
              year:"20014-2017",
              education:"MA NU TBS Kudus",
              address:"Jl. KH. Turaichan Adjhuri No.164, Pejaten, Kajeksan, Kec. Kota Kudus, Kabupaten Kudus"
            },
            {
              year:"20017-Now",
              education:"Universitas AMIKOM Yogyakarta",
              address:"Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta"
            },
          ]
      }
    },
  }
</script>