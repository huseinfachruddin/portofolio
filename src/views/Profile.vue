<template>
<v-app>
<div>
    <v-container>
      <v-card class="pa-3">
    <v-row class="d-flex justify-center ma-2">
      <v-flex md4 class="d-flex justify-center">
        <v-avatar
            class="profile"
            color="grey"
            size="164"
            
          >
            <v-img :src="data.img"></v-img>
          </v-avatar>
            
      </v-flex>
      <v-flex md6>
          <v-list-item three-line>
            <v-list-item-content>
          <h2>{{data.name}}</h2>
              <v-list-item-title>Umur : {{data.age}}</v-list-item-title>
              <v-list-item-title>Jenis Kelamin : laki-laki</v-list-item-title>
              <v-list-item-title>Alamat : Des Pekalongan,Kec Winong,Kab Pati</v-list-item-title>
              <v-list-item-title>Email : husein.fac18@gmail.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        <Sos/>
      </v-flex>
        <v-content class="pa-2">
         <p>
        Hey selamat datang ,saya Husein fachruddin Al Fahmy pemilik website portofolio ini. Saya lahir di Tulungagung Jatim,tinggal di Pati jateng,Lulusan dari Kudus Kota Kretek ,Sekarang Mahasiswa di Yogyakarta .
        pendidikan pondok pesantren di kota kudus dari tahun 2011 - 2017 atau dari Madrasah Tsanawiah sampai Aliyah .
        </p>  
        <p>
        Web ini sebagai kumpulan dari Project-project yang pernah saya kerjakan,dari Design Geafis sampai Pengembangan Website akan dikumpulkan disini menjadi satu dan saya menyertakan link Projectnya
        </p>  
        <p>
          Harapan saya Web Portofolio saya semakin banyak project yang ada atau sampai project karya tulis saya.silahkan untuk anda yang ingin bekerjasama membuat project dengan saya bisa menghubungi sosialmedia yang tertera
        </p>
        </v-content>
    </v-row>
      </v-card>
  </v-container>
</div>
</v-app>
</template>

<script>
import Sos from '../components/Home/Sos.vue'
export default {
  components: { Sos },
  data(){
    return{
      data:{
        img: require('@/static/akuu.jpg'),
        name:"Husein Fachruddin Al Fahmy",
        age: '21',

      }
    }
  },
}
</script>