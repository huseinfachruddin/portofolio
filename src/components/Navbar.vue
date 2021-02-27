<template>
<div id="navbar">
    <v-toolbar 
    color="teal darken-3" class="white--text " >

      <router-link :to="{name:'home'}" style="text-decoration:none">
        <v-btn icon class="white--text">
          <v-icon>mdi-home-circle</v-icon>
        </v-btn>
      </router-link>
      <v-toolbar-title>Husein Fachruddin</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{name:'profile'}" style="text-decoration:none">
        <v-btn icon class="white--text">
          <v-icon>mdi-contacts</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<script>
 
</script>
