<template>
<div class="home teal--text" style="">
<div class="teal darken-3">
  <Slider/>

</div>
<div class="grd-up">
  <div class="custom-shape-divider-top-1613764162">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
<div class="grd-end">
  <For-everyone/>
  <Skill/>
  <v-container fluid>
  <v-row class="d-flex justify-center ">
    <v-flex md5 class="pa-1">
    <h3 class="text-center">PROJECT</h3>
          <v-row class="pa-5">
            
            <v-flex class="pa-1" v-for="data in data" :key="data.i" md6 sm6 xs12>
              <router-link :to="{name: 'show', params: { key: data.id }}"  style="text-decoration:none ">
                <Pro :title="data.title" :made="data.made" :category="data.category" :src="data.img[0]"/>
              </router-link>
            </v-flex>
            <v-flex md12 sm12 xs12 class="pa-3">
            <router-link :to="{name:'project'}">
              <v-btn
                class="teal--text"
                text
                block
              >
                More
              </v-btn>   
            </router-link>
          </v-flex>
        </v-row>
    </v-flex>
    <v-flex md5>
      <Edu/>
    </v-flex>
  </v-row>
</v-container>
 <Sos/>
</div>
  </div>
</div>
</template>


<style>
.custom-shape-divider-top-1613764162 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1613764162 svg {
    z-index: 0;
    position: relative;
    display: block;
    width: calc(221% + 1.3px);
    height: 442px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1613764162 .shape-fill {
    fill: #00695C;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1613764162 svg {
        width: calc(100% + 1.3px);
        height: 76px;
    }
}

.grd-end{
  position: relative;
}
.grd-up{
  position: relative;
}
</style>

<script>
import {db} from '../firebase'
import Edu from '../components/Home/Edu.vue';
import ForEveryone from '../components/Home/ForEveryone.vue';
import Pro from '../components/Home/Pro.vue';
import Skill from '../components/Home/Skill.vue';
import Slider from '../components/Home/Slider';
import Sos from '../components/Home/Sos.vue';

export default {
  components: {
    Slider,
    Skill,
    Edu,
    ForEveryone,
    Pro,
    Sos
  },
  data () {
      return {
      data: [],
      }
    },
    mounted(){
      this.getProject()
    },
    methods:{
      async getProject(){
        this.$bind('data', db.collection('projects').where('category','in',['Backend','Frontend']).limit(4))
      }
    }
}
</script>
