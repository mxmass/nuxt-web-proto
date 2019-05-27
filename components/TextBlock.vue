<template>
  <v-layout>
    <v-card row flat>
      <!-- <v-card-title class="display-1">
        {{ heading }}
      </v-card-title> -->
      <v-card-text>
        <div class="intro">
          {{ blocktext }}
        </div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: {
    // heading: {
    //   type: String,
    //   default: ''
    // },
    blocktext: {
      type: String,
      default: ''
    }
  }
}
</script>

<style media="screen">
.intro {
  padding: 30px;
}
</style>
