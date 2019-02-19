<template>
  <div>
    <v-layout
      row
      justify-center
      @click="close(true)"
    >
      <v-dialog
        v-model="show"
        persistent
        content-class="imagepopup"
      >
        <div v-if="object.location">
          <v-layout v-if="wide">
            <v-img
              :src="object.location"
              :aspect-ratio="16/12"
            >
              <v-layout
                v-if="object.title"
                pa-2
                column
                fill-height
              >
                <v-flex
                  v-if="object.title"
                  shrink
                >
                  <div
                    dark
                    class="white--text subheading"
                  >
                    {{ object.title }}
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
          </v-layout>
          <v-layout
            v-else
            fill-height
            class="zoomed"
          >
            <v-img
              :src="object.location"
              :aspect-ratio="16/7"
              contain
              @click="close(true)"
            >
              <v-layout
                v-if="object.title"
                row
              >
                <v-flex v-if="object.title || object.wmin || object.wmax || object.hmin || object.hmax" xs3 ma-5 pa-5 white>
                  <span v-if="object.title" class="headline">
                    {{ object.title }}
                  </span><br>
                  <span v-if="object.wmin || object.wmax">
                    {{ object.wmin }}/{{ object.wmax }}
                  </span>
                  <span v-if="object.hmin || object.hmax">
                    <b>X</b> {{ object.hmin }}/{{ object.hmax }}
                  </span><br>
                </v-flex>
              </v-layout>
            </v-img>
          </v-layout>
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    wide: Boolean,
    object: {
      type: Object,
      default() {}
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    close(state) {
      this.$emit('close')
    },
    errorHandler(error) {
      this.$emit('error', error)
    }
  }
}
</script>

<style lang="scss">
.imagepopup {
  box-shadow: none;
}
.zoomed {
  // background-color: rgba(255, 255, 255, 0.9);
}
</style>
