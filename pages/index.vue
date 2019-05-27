<template>
  <div>
    <Materials :materials="materials" />
    <FrontsList :fronts="newFronts" />
    <Intro />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from '@/components/config'
import introtext from '@/components/Intro'
import materials from '@/components/Materials'
import frontslist from '@/components/FrontsList'

export default {
  layout: 'default',
  components: {
    Intro: introtext,
    Materials: materials,
    FrontsList: frontslist
  },
  data() {
    return {
      materials: config.materials,
      list: {
        type: Array,
        default: () => []
      },
      materialsFiltered: {
        type: Array,
        default: () => []
      },
      newFronts: {
        type: Array,
        default: () => []
      },
      materialsCount: {
        type: Number,
        default: 1
      }
    }
  },
  head() {
    return {
      title: config.general.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: config.general.meta.description
        }
      ]
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
      }
    })
  },
  mounted() {
    if (!this.fronts.length) {
      // filtering out incomplete objects (every front should have at least one sample,
      // render and cut image to display correctly)
      this.filteredList = this.list.filter(
        f =>
          f.renders.length > 0 &&
          f.samples.length > 0 &&
          f.cutimage.location.length > 0
      )
      // filling the global state array of fronts
      this.setFronts(this.filteredList)

      // setting up the "news" array length of 4
      // !!!!!!!!!!!! should be subst to the config var
      this.newFronts = this.filteredList.slice(-4)

      if (this.materials.length) {
        if (!this.materialsFiltered.length) {
          this.materials.forEach(m => {
            m.fronts = this.list.filter(el => el.material.stitle === m.stitle)
          })

          this.materialsFiltered = this.materials.filter(
            el => el.fronts.length > 0
          )

          this.materialsCount = this.materialsFiltered.length
            ? this.materialsFiltered.length
            : 1

          if (this.materialsFiltered.length) {
            this.setMaterials(this.materialsFiltered)
          }
        }
      }
      // const materials = this.fronts.map(a => a.material.stitle)
      // this.uniqueMaterials = [...new Set(materials)]
    } else {
      this.newFronts = this.fronts.slice(-4)
    }
  },
  methods: {
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
