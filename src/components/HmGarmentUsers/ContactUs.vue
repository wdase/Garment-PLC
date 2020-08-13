
<template>

  <v-footer
    dark
    height="auto"
    fixed
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          a :href="icon.url" :target="icon.target"
          class="mx-3"
         color="green">
        <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2020 — <strong>Widassie</strong>
      </v-card-actions>
    </v-card></v-footer></template>
<script>
  export default {
    data: () => ({
      icons: [
        {
            name:'mdi-facebook',
            url: 'https://www.twitter.com/',
            target: '_blank'
        },
        {
            name:'mdi-twitter',
            url: 'https://www.github.com/AfricanTurtles',
            target: '_blank'
        },
        {
            name:'mdi-linkedin',
            url: 'https://www.linkedin.com/in/AfricanTurtles',
            target: '_blank'
        },
        {
            name:'mdi-instagram',
            url: 'https://www.instagram.com/AfricanTurtles',
            target: '_blank'
        }
      ]
    })
  }
</script>
