<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :class="{
      'v-a-list': 1,
      'v-a-list--ordered': ordered
    }"
  >
    <slot v-if="hasSlots"></slot>
    <template v-else>
      <VPlaceholder
        v-for="(number, index) in placeholderNumber"
        height="2rem"
        :key="index"
        :marginBottom="index !== placeholderNumber - 1 ? '1rem' : null"
      />
    </template>
  </component>
</template>

<script>
export default {
  props: {
    ordered: Boolean,
    placeholderNumber: {
      type: Number,
      default: 2
    }
  },
  computed: {
    hasSlots () {
      const slots = this.$slots.default
      if (!slots && !slots.length) return
      if (slots[0].text || slots[0].tag) return true
    }
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
