<template>
  <div v-if="data">
    <v-layout
      v-if="data.length > 0"
      row
      wrap
      text-xs-center
    >
      <v-flex
        v-if="cutImage"
        xs12
        sm12
        md12
        lg12
        pa-2
        grey
        lighten-2
      >
        <div
          class="cutImg"
          text-xs-center
        >
          <v-img :src="cutImage.location" />
        </div>
      </v-flex>
      <v-flex
        v-if="data.length > 1"
        xs2
        sm1
        md2
        lg2
        class="samplesList"
      >
        <div
          v-for="(sample, index) in data"
          :key="index"
          class="textureBox"
        >
          <ImageWProgress
            :img="sample"
            :imgtoload="sample"
            cover
            @clickFunc="selectSample"
          />
        </div>
        <div class="clearfix" />
      </v-flex>
      <v-flex
        v-if="selectedSample.location"
        xs10
        sm11
        md10
        lg10
        grow 
        class="sampleView"
      >
        <ImageWProgress
          :img="selectedSample"
          :imgtoload="selectedSample"
          @clickFunc="openZoom"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ImageWProgress from '@/components/ImageWProgress'

export default {
  components: {
    ImageWProgress
  },
  props: {
    data: {
      type: Array,
      default() {}
    },
    selectedSample: {
      type: Object,
      default() {}
    },
    cutImage: {
      type: Object,
      default() {}
    }
  },
  mounted() {
    console.log(this.selectedSample, this.cutImage)
  },
  methods: {
    rgb(code) {
      return 'rgb(' + code + ')'
    },
    openZoom(item, wide) {
      this.$emit('openZoom', item, wide)
    },
    selectSample(sample) {
      this.selectedSample = sample
    }
  }
}
</script>
<style>
.sampleView {
  cursor: pointer;
}
.samplesList {
  padding: 0 !important;
}
.coloredSample {
  min-width: 65px;
  min-height: 65px;
  border: 0;
}
.cutImg {
  margin: 0 18%;
}
</style>
