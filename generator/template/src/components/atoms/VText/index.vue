<template>
  <component
    :class="[
      'v-a-text',
      `v-a-text--${size}`,
      `v-a-text--${weight}`
    ]"
    :is="`${tag}`"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'VText',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    size: {
      type: String,
      validator (value) {
        return ['x-large', 'large', 'medium', 'small', 'x-small'].indexOf(value) !== -1
      },
      default: 'small'
    },
    weight: {
      type: String,
      validator (value) {
        return ['normal', 'bold', 'light'].indexOf(value) !== -1
      },
      default: 'normal'
    }
  }
}
</script>

<style lang="scss">
  .v-a-text {
    color: $black;
    font-weight: normal;

    &--x-large {
      @include heading-x-large()
    }

    &--large {
      @include heading-large()
    }

    &--medium {
      @include heading-medium()
    }

    &--small {
      @include text-medium();
    }

    &--x-small {
      @include text-small();
    }

    &--bold {
      font-weight: bold;
    }

    &--light {
      font-weight: lighter;
    }

    strong, a {
      font-weight: bold;
    }

    a {
      color: $gold;
    }
  }
</style>
