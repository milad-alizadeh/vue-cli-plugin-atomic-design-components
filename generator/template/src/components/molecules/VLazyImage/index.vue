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
    /** Image src. Can be a url or local filename which loads from assets folder */
    src: String,
    /** Image alt attribute */
    alt: String,
    /** Image srcset attribute */
    srcset: String,
    /** Image sizes attribute */
    sizes: String,
    /** Whether a picture tag should be rendered */
    picture: Boolean,
    /** Sources for picture tag (if picture prop is set) */
    sources: Array,
    /** Aspect ration of the image. Since the image dimension is unknown before it\'s loaded,
    we can specify the aspect ratio before the image loaded in order to make both placeholder
    and image the same height and avoid a div height jump. The aspect ratio is calculated by
    this formula. ascpectRatio = width / height. For a 800x600px image the aspect
    ratio would be 800/600 = 1.33 */
    aspectRatio: {
      type: Number,
      default: 1.33
    },
    /** The placeholder graphic */
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
