<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-window v-model="rendersSlider">
          <v-window-item
            v-for="(img, n) in data"
            :key="`card-${n}`"
          >
            <v-img
              :src="img.location"
              :aspect-ratio="16/8"
              class="ipreview"
              @click="openZoom(img, true)"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-card-actions
        v-if="sliderlength > 1"
        light
        class="justify-space-between"
      >
        <v-btn
          flat
          icon
          color="lightgrey"
          @click="prev"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-item-group
          v-model="rendersSlider"
          class="text-xs-center"
          mandatory
        >
          <v-item
            v-for="n in sliderlength"
            :key="`btn-${n}`"
          >
            <v-btn
              slot-scope="{ active, toggle }"
              :input-value="active"
              flat
              icon
              color="lightgrey"
              @click="toggle"
            >
              {{ n }}
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          flat
          icon
          color="lightgrey"
          @click="next"
        >
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {}
    },
    sliderlength: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      rendersSlider: 0
    }
  },
  methods: {
    next() {
      this.rendersSlider =
        this.rendersSlider + 1 === this.sliderlength
          ? 0
          : this.rendersSlider + 1
    },
    prev() {
      this.rendersSlider =
        this.rendersSlider - 1 < 0
          ? this.sliderlength - 1
          : this.rendersSlider - 1
    },
    openZoom(item, wide) {
      this.$emit('openZoom', item, false)
    }
  }
}
</script>

<style>
.v-card__text {
  padding: 0 !important;
}
.display-1 {
  padding: 15px;
}
</style>
