<template>
<v-app>
<div>
  <v-container>
    <v-row>
      <v-flex md8 class="pa-5">
      <v-card class="pa-3">
  <v-carousel class="mb-5">
    <v-carousel-item
      v-for="(img,i) in data.img"
      :key="i"
    >
    <v-img :src="img" contain height="500"></v-img>
    </v-carousel-item>
  </v-carousel>
  <h2>{{data.title}}</h2>
  <h4>{{data.category}}</h4>
  <h5>made with : {{data.made}}</h5>
    <v-btn
    v-if="data.link !==''"
      rounded
      color="warning"
      dark
      small
      :href="data.link"
    >
      Link
    </v-btn>  <p>{{data.desc}}</p>
      </v-card>
      </v-flex>
      <v-flex md4 class="pa-5">
        <div v-for="project in projects" :key="project.i" @click="ubah()" >
          <router-link :to="{name: 'show', params: { key: project.id }}"  style="text-decoration:none ">
            <Pro :title="project.title" :made="project.made" :category="project.category" :src="project.img[0]" class="pa-1"/>
          </router-link>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</div>
</v-app>
</template>

<script>
import Pro from '../components/Home/Pro.vue'
import {db} from '../firebase'
export default {
  components:{
    Pro
  },
  data(){
    return{
      data:[],
      projects:[]
    }
  },
  mounted(){
    this.getProject(),
    this.getProjects()
  },
  methods:{
    async getProject(){
        await this.$bind('data', db.collection('projects').doc(this.$route.params.key))
        console.log(this.$route.params.key)
        console.log(this.data)
    },
    async getProjects(){
        await this.$bind('projects', db.collection('projects').limit(3))
        
    },
    async ubah(){
      await this.$bind('data', db.collection('projects').doc(this.$route.params.key))
        console.log(this.data)

    }
  }
}
</script>