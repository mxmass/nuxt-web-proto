<template>
  <div>
    <v-layout>
      <v-card
        row
        flat
      >
        <v-card-title class="display-1">
          Центр мебельных фасадов
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos. Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos. Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.</p>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-layout wrap>
      <v-flex
        v-for="(material, index) in materials"
        :key="index"
        xs12
        sm12
        md6
        lg6
      >
        <v-card
          v-if="material.fronts.length"
          class="materails"
          flat
        >
          <NuxtLink :to="'/material/'+material.stitle">
            <v-img
              v-if="material.fronts[material.fronts.length-1].renders.length"
              :src="material.fronts[material.fronts.length-1].renders[0].location"
              cover
            >
              <div class="ma-3">
                <span class="pa-4 headline white">
                  {{ material.meta.description }}
                </span>
              </div>
            </v-img>
          </NuxtLink>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card
          v-if="fronts"
          flat
        >
          <v-layout
            wrap
            text-xs-center
          >
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
              v-for="(front, index) in fronts"
              :key="front._id"
              xs12
              sm6
              md3
              pa-4
            >
              <NuxtLink
                :to="'/front/'+front._id"
                class="pa-5 em2"
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from '@/components/config'

export default {
  layout: 'default',
  data() {
    return {
      materials: config.materials,
      list: [],
      materialsFiltered: [],
      materialsCount: 1
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
    this.setFronts(this.list)
    if (this.fronts.length) {
      if (this.materials.length) {
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
