<template>
  <div :class="[
    'v-a-loader',
    `v-a-loader--${size}`
  ]">
    <div class="v-a-loader__dot v-a-loader__dot-1"></div>
    <div class="v-a-loader__dot v-a-loader__dot-2"></div>
    <div class="v-a-loader__dot v-a-loader__dot-3"></div>
  </div>
</template>

<script>
export default {
  name: 'VLoader',
  props: {
    /** Size of the loader. Options ['small', 'medium', 'large'] */
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss">
.v-a-loader {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &--small {
    font-size: 1.6rem;
    max-width: 3.5rem;
  }

  &--medium {
    font-size: 3.2rem;
    max-width: 7rem;
  }

  &--large {
    font-size: 4.8rem;
    max-width: 10.5rem;
  }

  &__dot {
    width: .56em;
    height: .56em;
    background-color: #000;
    border-radius: 100%;
    margin-right: .25em;
    animation: loader 1s infinite ease-in-out both;

    &:last-child {
      margin: 0;
    }
  }

  &__dot-1 {
    animation-delay: -0.32s;
  }

  &__dot-2 {
    animation-delay: -0.16s;
  }
}

@keyframes loader {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
