<template>
          <v-card>
            <v-chip class="ma-1 teal" dark>{{category}}</v-chip>
            <v-img
              :src="src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
              height="200px"
              contain
            >
              <h4 class="ma-1">{{title}}</h4>
            </v-img>

            <v-card-actions>
              <span class="caption">{{made}}</span>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
</template>


<script>
  export default {
    props:[
      "title",
      "src",
      "made",
      "category",
      "cols"
    ],
  }
</script>