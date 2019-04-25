<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :class="{
      'v-a-list': 1,
      'v-a-list--ordered': ordered
    }"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VList',
  props: {
    /** Whether the list is an ordred list */
    ordered: Boolean
  }
}
</script>

<style lang="scss">
.v-a-list {
  margin: 1rem 0;
  padding-left: 1.6rem;
  list-style: initial;

  &--ordered {
    list-style: decimal;
  }
}
</style>
