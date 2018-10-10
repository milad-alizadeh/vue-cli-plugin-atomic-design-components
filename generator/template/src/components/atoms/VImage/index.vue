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
      ref="imageNode"
    >
    <picture v-else>
      <source
        v-for="source in calculatedSources"
        :key="source.srcset"
        :media="source.sizes"
        :srcset="source.src"
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
  props: {
    src: {
      type: String,
      required: true
    },
    alt: String,
    srcset: Object,
    picture: {
      type: Boolean,
      default: false
    },
    sources: {
      type: Array,
      default () {
        return [
          {
            srcset: 400,
            sizes: '(max-width: 400px)'
          },
          {
            srcset: 600,
            sizes: '(max-width: 600px)'
          },
          {
            srcset: 800
          }
        ]
      }
    }
  },
  mounted () {
    this.loadImage()
  },
  data () {
    return {
      imageSrc: null,
      imageIsLoaded: false,
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
      let webp = this.$store ? this.$store.state.global.webp : false

      this.calculatedSources = this.sources.map(source => {
        let src = `${this.imageSrc}?width=${source.srcset}`

        if (webp) src = `${src}&format=webp`

        if (webp === null) src = null

        source.src = src

        return source
      })
    }
  },
  computed: {
    calculatedSrc () {
      let { src } = this

      if (isUrl(src)) {
        return src.indexOf('images.wi-5.com') !== -1 ? src : `https://images.wi-5.com/${src}`
      }

      return require(`@/assets/${src}`)
    }
  }
}
</script>

<style lang="scss">
.v-a-image {

  img {
    max-width: 100%;
  }
}
</style>
