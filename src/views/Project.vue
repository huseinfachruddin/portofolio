<template>
<v-app>
  <Skill/>
  <v-container >
    <h3 class="text-center">ALL PROJECT</h3>
    
    <v-row class="d-flex justify-center ma-1">
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
import {db} from '../firebase'
import Pro from '../components/Home/Pro.vue'
import Skill from '../components/Home/Skill.vue'
export default {
  components:{
    Skill,
    Pro,
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
        this.$bind('data', db.collection('projects'))
      }
    }
}
</script>