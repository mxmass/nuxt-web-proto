<template>
  <v-card
    :class="cardClass ? cardClass : 'd-flex'"
    flat
    @click="clickFunc(img)"
  >
    <v-img
      :src="img.location"
      :lazy-src="img.location"
      :class="imgClass"
      aspect-ratio="1"
      contain
    >
      <v-layout
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular
          indeterminate
          color="blue lighten-5"
        />
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default() {}
    },
    imgtoload: {
      type: Object,
      default() {}
    },
    cardClass: {
      type: String,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickFunc(img) {
      if (this.imgtoload) {
        img = this.imgtoload
      }
      this.$emit('clickFunc', img)
    }
  }
}
</script>
