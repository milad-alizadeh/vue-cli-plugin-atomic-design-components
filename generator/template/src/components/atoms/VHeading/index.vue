<template>
  <component
    :is="type"
    :class="[
      'v-a-heading',
      `v-a-heading--${level}`
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VHeading',
  props: {
    level: {
      type: Number,
      validation (val) {
        return [1, 2, 3, 4].indexOf(val) !== -1
      },
      required: true
    }
  },
  computed: {
    type () {
      return `h${this.level}`
    }
  }
}
</script>

<style lang="scss">
.v-a-heading {
  &--1 {
    @include heading-x-large();
  }

  &--2 {
    @include heading-large();
  }

  &--3 {
    @include heading-medium();
  }

  &--4 {
    @include heading-small();
  }
}
</style>
