<template>
<v-app>
  <v-container>
    <Skill/>
  <div class="text-center ma-5">
  <h2 >Back-end</h2>
  <span>PHP,Mysql,Codeigniter,Laravel,Rest API</span>
  </div>
    <v-row class="d-flex justify-center pa-2">
      <v-flex class="pa-1" v-for="data in data" :key="data.title" md3 sm6 xs12>
        <router-link :to="{name: 'show', params: { key: data.id }}"  style="text-decoration:none ">
          <Pro :title="data.title" :made="data.made" :category="data.category" :src="data.img[0]" class="pa-1"/>
        </router-link>
      </v-flex>
    </v-row>
  </v-container>
</v-app>
</template>

<script>
import {db} from '../../firebase'
import Pro from '../../components/Home/Pro.vue'
import Skill from '../../components/Home/Skill.vue'
export default {
  components:{
    Pro,
    Skill

  },
   data () {
      return {
      data: [],
      }
    },
    mounted(){
      this.getBackend()
    },
    methods:{
      getBackend(){
        this.$bind('data', db.collection('projects').where('category', '==', 'Backend'))
      }
    }
}
</script>