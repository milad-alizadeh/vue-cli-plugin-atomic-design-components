<template>
  <div
    v-if="svg"
    :class="[
      'a-icon',
      `a-icon--${color}`,
      `a-icon--${size}`
    ]"
  >
    <component :is="svg" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: String,
      validator (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
      default: 'small'
    }
  },
  computed: {
    svg () {
      return () => import(`./icons/${this.name}.svg`)
    }
  }
}
</script>

<style lang="scss">
  .a-icon {
    display: block;

    &--small {
      width: 2.4rem;
      height: 2.4rem;
    }

    &--medium {
      width: 3.6rem;
      height: 3.6rem;
    }

    &--large {
      width: 4.8rem;
      height: 4.8rem;
    }

    &--red {
      color: red
    }

    &--black {
      color: black;
    }

    svg {
      display: block;
      fill: currentColor;
      stroke: currentColor;
      width: 100%;
      height: 100%;
    }
  }

</style>
