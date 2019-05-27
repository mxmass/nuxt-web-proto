<template>
  <div id="preview">
    <v-layout
      v-if="selected"
      row
      wrap
      white
    >
      <v-flex xs12 sm12 md6>
        <Breadcrumbs :items="bread" />
      </v-flex>
      <v-flex xs12 sm12 md6 text-xs-right display-1>
        Фрезеровка &laquo;{{ selected.name }}&raquo;
      </v-flex>
    </v-layout>
    <!-- <Headline :title="selected.name" :cutimage="selected.cutimage" /> -->
    <v-layout row wrap white>
      <v-flex
        d-flex
        xs12
        sm12
        md4
        order-md1
        order-sm1
      >
        <div v-if="selected.samples">
          <Samples
            :data="selected.samples"
            :selected-sample="selected.samples[0]"
            :cut-image="selected.cutimage"
            @openZoom="openZoom"
          />
        </div>
      </v-flex>
      <v-flex
        xs12
        sm12
        md8
        order-md2
        order-sm2
        order-sm3
      >
        <div class="slide">
          <SliderRenders
            v-if="sliderlength"
            :data="selected.renders"
            :title="selected.name"
            :sliderlength="sliderlength"
            @openZoom="openZoom"
          />
        </div>
      </v-flex>
      <v-flex
        xs12
        sm12
        md12
        order-md4
        order-sm3
      >
        <div
          v-if="selected.elements"
          class="slide"
        >
          <Elements
            :data="selected.elements"
            @openZoom="openZoom"
          />
        </div>
      </v-flex>
    </v-layout>
    <ZoomDialog
      :visible="showZoom"
      :object="objectToZoom"
      :wide="wideZoom"
      :config="config"
      @close="closeZoom"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Breadcrumbs from '@/components/Breadcrumbs'
import SliderRenders from '@/components/SliderRenders'
import Elements from '@/components/Elements'
import Samples from '@/components/Samples'
import ZoomDialog from '@/components/Zoom'

export default {
  layout: 'default',
  components: {
    Breadcrumbs,
    SliderRenders,
    Samples,
    ZoomDialog,
    Elements
  },
  data() {
    return {
      selected: {},
      showZoom: false,
      wideZoom: false,
      objectToZoom: {},
      sliderlength: 0,
      config: {},
      list: [],
      bread: []
    }
  },
  head() {
    return {
      title: this.selected.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
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
      },
      materails: state => {
        return state.materails
      }
    })
  },
  mounted() {
    if (!this.fronts.length) {
      if (this.list.length) {
        this.setFronts(this.list)
      }
    }
    const f = this.selectFront(this.fronts, this.$route.params.id)
    if (f.length) {
      this.selected = f[f.length - 1]
    }
    if (this.selected.renders) {
      this.sliderlength = this.selected.renders.length
    }
    this.bread = [
      {
        text: 'Главная',
        disabled: false,
        href: '/'
      },
      {
        text: this.selected.material.title,
        disabled: false,
        href: '/material/' + this.selected.material.stitle
      },
      {
        text: this.selected.name,
        disabled: true,
        href: '/front/' + this.selected._id
      }
    ]
  },
  methods: {
    selectFront(arr, id) {
      return arr.filter(el => el._id === id)
    },
    openZoom(object, wide) {
      this.objectToZoom = object
      this.wideZoom = false
      this.showZoom = true
    },
    closeZoom() {
      this.showZoom = false
    },
    ...mapActions(['setFronts'])
  }
}
</script>

<style lang="scss">
#preview {
  padding: 0;
  .lorem {
    padding: 20px;
    color: white;
    background-color: black;
  }
  .slide {
    padding: 0;
    margin: 0;
  }
  .part {
    padding: 10px 0;
    margin: 25px 0 10px 0;
    span {
      border-bottom: solid 2px darkred;
    }
  }
  .cutImage {
    padding: 10px 20px;
  }
  .sampleImg {
    max-height: 70vh;
    cursor: pointer;
  }
  .w100 {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .irender {
    height: 300px;
    overflow: hidden;
  }
  .elementBox {
    min-width: 100px;
    min-height: 160px;
    float: left;
    text-align: center;
    cursor: pointer;
    .ielement {
      max-width: 90px;
      max-height: 90px;
      cursor: pointer;
      align: center;
    }
  }
  .textureBox {
    min-width: 65px;
    min-height: 65px;
    float: right;
    text-align: center;
    cursor: pointer;
    .ielement {
      max-width: 65px;
      max-height: 65px;
      cursor: pointer;
      align: center;
    }
  }
  .ipreview {
    cursor: pointer;
  }
}
.clearfix {
  clear: both;
  width: 1px;
  height: 1px;
  border: 0;
}
</style>
