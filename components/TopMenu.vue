<template>
  <v-toolbar flat dark fixed app pa-3>
    <img src="/logo.png" max-height="45" cover></img>
    <v-spacer />
    <v-flex xs5 offset-xs-3>
      <h1 class="logotext">
        Центр мебельных фасадов
      </h1>
    </v-flex>
    <v-flex xs4>
      <h1 class="logotext">
        +7 (4012) 93-19-41, 70-68-84
      </h1>
    </v-flex>
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

<style>
.logotext {
  font-size: 2em;
  font-weight: normal;
}
</style>
