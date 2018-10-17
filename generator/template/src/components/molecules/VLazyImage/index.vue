<template>
  <div class="v-m-lazy-image">
    <div class="v-m-lazy-image__inner" :style="`padding-top: ${ 1 / aspectRatio * 100 }%`">
      <transition-group name="fade-long">
        <VPlaceholder
          v-show="!isLoaded"
          key="1"
          type="image"
          :aspectRatio="aspectRatio"
          :imageGraphic="placeholderGraphic"
        />
        <VImage
          v-show="isLoaded"
          key="2"
          :src="src"
          :alt="alt"
          :srcset="srcset"
          :picture="picture"
          :sources="sources"
          :sizes="sizes"
          @loaded="handleOnload"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import VImage from 'atoms/VImage'
import VPlaceholder from 'atoms/VPlaceholder'

export default {
  name: 'VLazyImage',
  components: {
    VImage,
    VPlaceholder
  },
  props: {
    src: String,
    alt: String,
    srcset: String,
    sizes: String,
    picture: Boolean,
    sources: Array,
    aspectRatio: {
      type: Number,
      default: 1.33
    },
    placeholderGraphic: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isLoaded: false
    }
  },
  methods: {
    handleOnload () {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="scss">
.v-m-lazy-image {
  position: relative;

  .v-a-placeholder {
    max-width: 100%;
  }

  .v-a-placeholder,
  .v-a-image {
    @include full-absolute;
    margin: auto;
  }

  &__inner {
    display: block;
    width: 100%;
    height: 0;
  }
}
</style>
