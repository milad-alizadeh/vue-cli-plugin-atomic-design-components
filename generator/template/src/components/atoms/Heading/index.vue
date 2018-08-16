<template>
  <component :is="type">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      validation (val) {
        return [1, 2, 3, 4, 5, 6].indexOf(val) !== -1
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
.a-heading {

}
</style>
