<template>
  <div
    class="v-m-carousel"
    ref="carousel"
    @touchend="handleTouchend"
    @touchstart="handleTouchstart"
  >
    <div
      class="v-m-carousel__inner"
      name="slide"
      :style="positionX ? `transform: translateX(${positionX}px)`: null"
    >
      <slot></slot>
    </div>

    <ul v-if="arrowNavigation" class="v-m-carousel__controls">
      <li class="v-m-carousel__control v-m-carousel__control--prev" @click="previous()">
        <transition name="fade">
          <VIcon name="arrow-left" size="medium" v-if="loop || currentSlide > 0" />
        </transition>
      </li>

      <li class="v-m-carousel__control v-m-carousel__control--next" @click="next()">
        <transition name="fade">
          <VIcon name="arrow-right" size="medium" v-if="loop || currentSlide < totalSlideNumber - 1"/>
        </transition>
      </li>
    </ul>

    <ul class="v-m-carousel__dotted-nav" v-if="dottedNav && totalSlideNumber > 1">
      <li
        v-for="(n, index) in totalSlideNumber"
        @click="currentSlide = index"
        :key="index"
        :class="[
          'v-m-carousel__dot',
          `${ index === currentSlide ? 'v-m-carousel__dot--active' : ''}`
        ]"
      ></li>
    </ul>
  </div>
</template>

<script>
import VIcon from 'atoms/VIcon'

import debounce from '@/helpers/debounce'

export default {
  name: 'VCarousel',
  components: {
    VIcon
  },
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    dottedNav: {
      type: Boolean,
      default: true
    },
    arrowNavigation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      carouselWidth: 0,
      currentSlide: 0,
      totalSlideNumber: 0,
      touchstartX: 0,
      touchendX: 0
    }
  },
  mounted () {
    this.calculateDimensions()
    this.getTotalSlidesNumber()
  },
  created () {
    window.addEventListener('resize', debounce(this.calculateDimensions, 100))
  },
  beforeDestroy () {
    window.removeEventListener('resize', debounce(this.calculateDimensions, 100))
  },
  computed: {
    positionX () {
      return -1 * this.currentSlide * this.carouselWidth
    }
  },
  methods: {
    getTotalSlidesNumber () {
      let slides = this.$slots.default.filter(node => {
        if (node.tag) return node
      })

      this.totalSlideNumber = slides.length
    },
    calculateDimensions () {
      if (this.$refs.carousel) {
        let carousel = this.$refs.carousel
        let cs = getComputedStyle(carousel)
        let borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth)
        this.carouselWidth = carousel.offsetWidth - borderX
      }
    },
    previous () {
      if (this.currentSlide > 0) {
        this.currentSlide -= 1
      } else if (this.loop) {
        this.currentSlide = this.totalSlideNumber - 1
      }
    },
    next () {
      if (this.currentSlide < this.totalSlideNumber - 1) {
        this.currentSlide += 1
      } else if (this.loop) {
        this.currentSlide = 0
      }
    },
    handleTouchstart (event) {
      this.touchstartX = event.changedTouches[0].screenX
    },
    handleTouchend (event) {
      this.touchendX = event.changedTouches[0].screenX
      this.handleGesture()
    },
    handleGesture () {
      let { touchendX, touchstartX } = this

      if (touchendX < touchstartX) {
        this.next()
      }

      if (touchendX > touchstartX) {
        this.previous()
      }
    }
  }
}
</script>

<style lang="scss">
.v-m-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 30rem;

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    transition: transform 0.3s;

    .v-m-carousel-slide {
      height: 100%;
      min-width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  &__controls {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  &__control {
    cursor: pointer;
    opacity: .3;
    transition: opacity .3s;
    transform: translateY(-100%);

    &:hover {
      opacity: 1;
    }
  }

  &__dotted-nav {
    position: absolute;
    bottom: 3rem;
    left: 0;
    width: 100%;
    height: 0;
    display: flex;
    justify-content: center;
  }

  &__dot {
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
    background: $black;
    border-radius: 50%;
    opacity: .3;
    transition: opacity .3s;
    cursor: pointer;

    &--active,
    &:hover {
      opacity: 1;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
