<template>
  <component
    :is="tag"
    :class="[
      'v-a-table-cell',
      heading ? 'v-a-table-cell--heading' : '',
      nowrap ? 'v-a-table-cell--nowrap' : '',
      textAlign ? `v-a-table-cell--text-${textAlign}` : ''
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VTableCell',
  props: {
    heading: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center', 'justify'].indexOf(value) > -1
      }
    },
    nowrap: {
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

  &--text-right {
    text-align: right;
  }

  &--text-left {
    text-align: left;
  }

  &--text-center {
    text-align: center;
  }

  &--text-justify {
    text-align: justify;
  }

  &--heading {
    font-weight: bold;
    background: $white;
  }

  &--nowrap {
    white-space: nowrap;
  }
}
</style>
