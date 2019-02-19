<template>
  <v-layout
    wrap
    class="black p30 white--text"
  >
    <v-flex
      xs12
      sm6
      md4
      text-xs-left
    >
      &copy; Арт-мебель 2019<br>
      Центр Мебельных Фасадов
    </v-flex>
    <v-flex
      xs12
      sm6
      md4
      text-xs-left
    >
      <a href="#">
        г. Калининград, ул. Нарвская 54
      </a><br>
      +7 (4012) 93-19-41
    </v-flex>
    <v-flex
      xs12
      sm6
      md4
      text-xs-left
    >
      <a href="#">
        г. Калининград, ул. Емельянова, 234
      </a><br>
      +7 (4012) 70-68-84
    </v-flex>
  </v-layout>
</template>

<style lang="scss">
#footer {
  font-size: 1.1em;
  a,
  a:hover {
    color: white !important;
    text-decoration: none;
    border-bottom: dotted 1px white;
  }
}
.p30 {
  padding: 30px !important;
}
</style>
