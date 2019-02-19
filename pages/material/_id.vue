<template>
  <v-layout
    wrap
    white
    text-xs-center
  >
    <v-flex
      v-if="material"
      xs12
      sm12
      md12
      lg12
      class="text-xs-left black--text pa-3"
    >
      <span v-if="material.meta" class="display-1">
        {{ material.meta.description }}
      </span>
    </v-flex>
    <v-flex
      v-for="(front, index) in filtered"
      :key="front._id"
      xs12
      sm6
      md3
      pa-4
    >
      <NuxtLink
        :to="'/front/'+front._id"
        class="em2"
      >
        <v-card
          v-if="index < 4"
          flat
          pa-5
        >
          <v-img
            :src="front.samples[0].location"
            contain
            @click="'/front/'+front._id"
          />
          <v-img
            :src="front.cutimage.location"
            max-height="35px"
            contain
          />
          <v-card-text v-if="front.samples.length">
            {{ front.name }}
          </v-card-text>
        </v-card>
      </NuxtLink>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from '@/components/config'

export default {
  data() {
    return {
      material: config.materials.filter(
        el => el.stitle === this.$route.params.id
      )[0],
      list: [],
      filtered: []
    }
  },
  async asyncData(ctx) {
    return {
      list: await ctx.app.$frontRepository.index()
    }
  },
  computed: {
    ...mapState({
      fronts: state => {
        return state.fronts
      },
      materials: state => {
        return state.materials
      }
    })
  },
  mounted() {
    console.log(this.material)
    console.log(this.list)
    console.log(this.fronts.length)
    console.log(this.materials)
    if (!this.fronts.length) this.setFronts(this.list)
    if (this.fronts.length) {
      this.filtered = this.filterFrontsByMaterial(
        this.fronts,
        this.$route.params.id
      )
      // if (this.filtered.length) {
      //   this.material = this.filtered[0].material
      // }
    }
  },
  methods: {
    filterFrontsByMaterial(arr, v) {
      const f = arr.filter(el => el.material.stitle === v)
      return f
    },
    ...mapActions(['setFronts', 'setMaterials'])
  }
}
</script>

<style lang="scss">
#nuxt {
  a,
  a:hover {
    color: black !important;
    text-decoration: none;
  }
  .em2 {
    font-size: 1.8rem;
  }
  .pattern {
    background: url('/pattern2.jpg') center left repeat;
  }
}
</style>
