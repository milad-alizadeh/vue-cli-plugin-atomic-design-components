<template>
  <div
    class="v-m-carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCarouselSlide'
}
</script>

<style lang="scss">
.v-m-carousel-slide {
  padding: 1rem;
  user-select: none;
}
</style>
