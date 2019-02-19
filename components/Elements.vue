<template>
  <div v-if="data">
    <v-layout
      row
      wrap
      text-xs-center
    >
      <v-flex xs1 sm3 md3 lg4 class="pattern" />
      <v-flex grow>
        <v-card
          flat
          class="pa-3 headline grey lighten-3"
        >
          Элементы и декор
        </v-card>
      </v-flex>
      <v-flex xs1 sm3 md3 lg4 class="pattern" />
    </v-layout>
    <!-- <v-layout row>
      <v-flex xs12 text-xs-center display-1>
        Элементы и декор
      </v-flex>
    </v-layout> -->
    <v-layout row>
      <v-flex xs12 class="elementWrap">
        <div
          v-for="(element, index) in data"
          :key="index"
          class="elementBox"
        >
          <v-img
            :src="element.location"
            :title="element.title"
            :alt="element.title"
            contain
            class="ielement"
            @click="openZoom(element, false)"
          />
          <div>
            <div v-if="element.title">
              {{ element.title }}
            </div>
            <div v-if="element.wmin || element.wmax">
              [Ш {{ element.wmin }}/{{ element.wmax }}]
            </div>
            <div v-if="element.hmin || element.hmax">
              [В {{ element.hmin }}/{{ element.hmax }}]
            </div>
          </div>
        </div>
        <div class="clearfix" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {}
    }
  },
  methods: {
    openZoom(item, wide) {
      this.$emit('openZoom', item, wide)
    }
  }
}
</script>
<style lang="scss">
.elementWrap {
  padding: 5% !important;
  .elementBox {
    min-height: 160px;
  }
}
.pattern {
  background: url('/pattern2.jpg') center left repeat;
}
</style>
