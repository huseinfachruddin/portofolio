<template>
  <v-footer
    color="teal darken-3"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <div v-for="link in links"
          :key="link.name">
        <router-link :to="{name:link.to,hash:'#aku'}" style="text-decoration: none;">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.name }}
        </v-btn>
        </router-link>
      </div>
      <v-col
        class="teal darken-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Husein Fachruddin</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
      {
        name:'Home',
        to:"home"
      },
      {
        name:'Design',
        to:"project.design"
      },
      {
        name:'Back-end',
        to:"project.backend"
      },
      {
        name:'Front-end',
        to:"project.frontend"
      },
      {
        name:'Profile',
        to:"profile"
      },
      ],
    }),
  }
</script>