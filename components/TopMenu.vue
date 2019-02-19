<template>
  <v-toolbar flat dark fixed app pa-3>
    <img src="/logo.png" max-height="45" cover></img>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="(menuitem, index) in items"
        :key="index"
        flat
        white
      >
        {{ menuitem.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {}
    }
  }
}
</script>
