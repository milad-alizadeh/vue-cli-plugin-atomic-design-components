<template>
  <ul class="v-m-nav-list" v-if="list.length">
    <VNavItem
      v-for="item in list"
      :to="item.to"
      :href="item.href"
      :key="item.label"
      @click="$emit('click', $emit)"
    >{{ item.label }}</VNavItem>
  </ul>
</template>

<script>
import VNavItem from 'atoms/VNavItem'

export default {
  name: 'VNavList',
  props: {
    /** An array of nav item objects. List format: { label: String, to: [String, Array], href: String } */
    list: Array
  },
  components: {
    VNavItem
  }
}
</script>

<style lang="scss">
.v-m-nav-list {
  display: block;
  width: 100%;

  .v-a-nav-item {
    border-bottom: .1rem solid $grey-light;

    &:first-child {
      border-top: .1rem solid $grey-light;
    }
  }
}
</style>
