<template>
<div class="slider " grey>
<v-container fluid>
  <v-carousel lazy cycle show-arrows-on-hover hide-delimiters mt-5 height="450">
    <v-carousel-item v-for="(item,i) in items" :key="i"  reverse-transition="fade-transition" transition="fade-transition" >
        <div class="row d-flex justify-center mt-3 my-auto">
            <v-flex md6 sm6  class=" text-center align-center my-auto" >
                    <h1 class="white--text ">
                        {{item.title}}
                    </h1>
              
            </v-flex>
            <v-flex md5 sm5  class="d-flex justify-center pa-8 my-auto">
                <v-img :src="item.src" contain/>
            </v-flex >
        </div>
    </v-carousel-item>
  </v-carousel>
</v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/static/slider/1234aku.png'),
            title:"My Name Husein Fachruddin"
          },
          {
            src: require('@/static/slider/12aku.png'),
            title:"Im Full-Stack Web Devloper "
          },
          {
            src: require('@/static/slider/1aku.png'),
            title:"I Can Graphic Design Too"
          },
          {
            src: require('@/static/slider/2aku.png'),
            title:"Welcom In My Web Portofolio"
          },
        ],
      }
    },
  }
</script>
