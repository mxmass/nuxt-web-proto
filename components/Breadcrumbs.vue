<template>
  <!-- <v-breadcrumbs :items="items">
    <v-icon slot="divider">
      chevron_right
    </v-icon>
  </v-breadcrumbs> -->
  <div class="v-breadcrumbs">
    <span
      v-for="(item, index) in items"
      :key="index"
    >
      <NuxtLink :to="item.href" class="v-breadcrumbs__item">
        {{ item.text }}
      </NuxtLink>
      <v-icon v-if="index < items.length - 1" class="v-breadcrumbs__divider">
        chevron_right
      </v-icon>
    </span>
  </div>
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

<style lang="scss">
.v-breadcrumbs {
  margin: 5px 0 0 15px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  padding: 18px 12px;

  .v-breadcrumbs__item {
    color: black;
    border-bottom: dotted 1px black;

    &:hover {
      border: 0;
    }
  }

  .v-breadcrumbs__divider {
    font-size: 18px;
    margin: 0 10px;
  }
}
</style>
