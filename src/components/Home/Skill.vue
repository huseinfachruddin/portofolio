<template>
<div class="skill">
    <v-container>
    <h3 class="text-center">SKILL</h3>
        <v-row class="d-flex justify-center mt-5">
            <v-flex md3 sm5 sm-3 ma-3 v-for="(card,i) in cards" :key="i">
                <v-hover
                close-delay="10"
                open-delay="10"
                v-slot="{ hover }"
                >
                <router-link :to="{name:card.to}" style="text-decoration: none;">
                <v-card
                    class="mx-auto"
                    outlined
                    :elevation="hover ? 12 : 2"
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">
                        {{card.title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{card.desc}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <div>
                    <v-img :src="card.img" width="80"/>
                    </div>
                    </v-list-item>

                </v-card>
                </router-link>
                </v-hover>
            </v-flex>

        </v-row>
    </v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
        cards: [
            {
            title:"Design",
            img: require('@/static/g.png'),
            desc:"Psd,AI,Figma,Sketchup",
            to:"project.design"
            },
            {
            title:"Front-end",
            img: require('@/static/b.png'),
            desc:"HTML,CSS,Javascript,Vue js",
            to:"project.frontend"
            },
            {
            title:"Back-end",
            img: require('@/static/b2.png'),
            desc:"PHP,CI,Laravel,Rest API ",
            to:"project.backend"
            },
        ],
      }
    },
  }
</script>