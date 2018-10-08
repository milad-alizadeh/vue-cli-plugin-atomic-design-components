<template>
  <div
    :class="[
      'v-m-carousel-slide',
      `v-m-carousel-slide--${backgroundColor}`,
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCarouselSlide',
  props: {
    backgroundColor: {
      type: String,
      validator (value) {
        return ['blue', 'red', 'gold'].indexOf(value) > -1
      },
      default: 'blue'
    }
  }
}
</script>

<style lang="scss">
.v-m-carousel-slide {
  padding: 1rem;
  user-select: none;

  &--blue {
    background-color: $blue;
  }

  &--gold {
    background-color: $gold;
  }

  &--red {
    background-color: $error;
  }
}
</style>
