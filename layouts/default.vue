<template>
  <v-app>
    <TopMenu />
    <v-content>
      <v-container
        id="nuxt"
        pa-0
      >
        <nuxt />
      </v-container>
      <v-container
        id="footer"
        pa-0
      >
        <Footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'

export default {
  components: {
    TopMenu,
    Footer
  }
}
</script>
