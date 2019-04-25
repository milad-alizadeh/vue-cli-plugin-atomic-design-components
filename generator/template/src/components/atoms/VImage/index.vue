<template>
  <div
    :class="[
      'v-a-image',
      imageIsLoaded ? 'v-a-image--is-loaded' : ''
    ]"
  >
    <img
      v-if="!picture"
      :alt="alt"
      :src="imageSrc"
      :srcset="srcset"
      :sizes="sizes"
      ref="imageNode"
    >
    <picture v-else>
      <source
        v-for="source in calculatedSources"
        :key="source.srcset"
        :media="source.media"
        :srcset="source.srcset"
      />
      <img
        :alt="alt"
        :src="imageSrc"
        ref="imageNode"
      />
    </picture>
  </div>
</template>

<script>
import isUrl from '@/helpers/is-url'

export default {
  name: 'VImage',
  props: {
    /** src. Can be a url or local filename which loads from assets folder */
    src: {
      type: String,
      required: true
    },
    /** alt attribute */
    alt: String,
    /** srcset attribute */
    srcset: String,
    /** sizes attribute */
    sizes: String,
    /** Whether a picture tag should be rendered */
    picture: {
      type: Boolean,
      default: false
    },
    /** Sources for picture tag (if picture prop is set) */
    sources: Array
  },
  mounted () {
    this.loadImage()
  },
  data () {
    return {
      imageSrc: null,
      imageIsLoaded: false,
      imageProxyUrl: 'https://images.wi-5.com',
      calculatedSources: []
    }
  },
  methods: {
    loadImage () {
      this.imageSrc = this.calculatedSrc
      this.setSources()

      this.$refs.imageNode.onload = () => {
        this.$emit('loaded')
        this.imageIsLoaded = true
      }
    },
    async setSources () {
      // Check webp support from Vuex store
      // let webp = this.$store ? this.$store.state.global.webp : false

      if (this.sources) {
        this.calculatedSources = this.sources.map(source => {
          let srcset
          let src = this.imageSrc
          srcset = isUrl(src) ? source.srcset : require(`../../../assets/${source.srcset}`)
          source.srcset = srcset
          return source
        })
      }
    }
  },
  computed: {
    calculatedSrc () {
      let { src } = this

      if (isUrl(src)) {
        return src.indexOf(this.imageProxyUrl) === -1 ? `${this.imageProxyUrl}/${src}` : src
      }

      return require(`../../../assets/${src}`)
    }
  }
}
</script>

<style lang="scss">
.v-a-image {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }
}
</style>
