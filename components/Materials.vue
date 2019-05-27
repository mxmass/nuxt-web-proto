<template lang="html">
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
</template>

<script>
export default {
  props: {
    materials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
