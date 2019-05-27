<template lang="html">
  <v-layout v-if="fronts">
    <v-flex>
      <v-card flat>
        <v-layout wrap text-xs-center>
          <v-flex xs3 md4 class="pattern" />
          <v-flex grow>
            <v-card
              flat
              class="pa-3 display-2 grey lighten-3"
            >
              Новинки
            </v-card>
          </v-flex>
          <v-flex xs3 md4 class="pattern" />
        </v-layout>
        <v-layout
          wrap
          text-xs-center
        >
          <v-flex
            v-for="front in fronts"
            :key="front._id"
            xs12
            sm6
            md3
            pa-4
          >
            <NuxtLink
              v-if="front.samples"
              :to="'/front/'+front._id"
              class="pa-5 em2"
            >
              <v-card
                flat
                pa-5
              >
                <v-img
                  :src="front.samples[0].location"
                  contain
                />
                <v-img
                  v-if="front.cutimage"
                  :src="front.cutimage.location"
                  max-height="35px"
                  contain
                />
                <v-card-text>
                  {{ front.name }}
                </v-card-text>
              </v-card>
            </NuxtLink>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    fronts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
