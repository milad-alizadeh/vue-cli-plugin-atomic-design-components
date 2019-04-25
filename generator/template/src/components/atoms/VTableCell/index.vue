<template>
  <component
    :is="tag"
    :class="[
      'v-a-table-cell',
      heading ? 'v-a-table-cell--heading' : ''
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VTableCell',
  props: {
    /** Whther this cell should be a <th> instead of <td> */
    heading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag () {
      return this.heading ? 'th' : 'td'
    }
  }
}
</script>

<style lang="scss">
.v-a-table-cell {
  padding: 1rem;
  background: $grey-lighter;
  border: .1rem solid $grey-light;
  text-align: left;

  &--heading {
    font-weight: bold;
    background: $white;
  }
}
</style>
