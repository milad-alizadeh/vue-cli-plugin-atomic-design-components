<template>
  <div
    :class="[
      'v-a-placeholder',
      `v-a-placeholder--${type}`
    ]"
  >
    <div
      class="v-a-placeholder__graphic-container"
      :style="type === 'image' ? `padding-top: ${100 / aspectRatio}%` : null"
    >
      <transition name="fade">
        <svg
          v-show="isLoaded"
          class="v-a-placeholder__graphic"
          :viewBox="computedViewBox"
          @loaded="isLoaded = true"
        >
          <defs>
            <component
              v-if="graphic"
              :is="graphic.default"
              :lines="lines"
              :lineScale="lineScale * 10"
              :lineHeight="lineHeight"
              :roundedCorners="roundedCorners"
              :shapeId="shapeId"
            ></component>

            <linearGradient id="gradient1">
              <stop :stop-color="color1" offset="0">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="-1; 1"
                  :dur="`${speed}s`"
                  repeatCount="indefinite"
                />
              </stop>
              <stop :stop-color="color2" offset=".5">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="-.5; 1.5"
                  repeatCount="indefinite"
                  :dur="`${speed}s`"
                />
              </stop>
              <stop :stop-color="color1" offset="1">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="0; 2"
                  repeatCount="indefinite"
                  :dur="`${speed}s`"
                />
              </stop>
            </linearGradient>
          </defs>
          <rect
            class="v-a-placeholder__content"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#gradient1)"
            :clip-path="`url(#${shapeId})`"
          />
        </svg>
      </transition>
    </div>
  </div>
</template>

<script>
import uid from '@/helpers/uid'

export default {
  name: 'VPlaceholder',
  props: {
    /** Type of placeholder. Options: ['bullet-list', 'text', 'image'] */
    type: {
      type: String,
      required: true,
      validator (val) {
        return ['text', 'image', 'bullet-list'].indexOf(val) !== -1
      }
    },
    /** Available only on 'image' type. The name of graphic to be used as the center icon */
    imageGraphic: String,
    /** Available only on 'image' type. The ratio of the placeholder box. It equals to width/height. for example 400x300 image ratio will be 400/300 = 1.33 */
    aspectRatio: {
      type: Number,
      default: 1.33
    },
    /** Available only on ['text', 'bullet-list'] type. The number of lines of placeholders. */
    lines: {
      type: Number,
      default: 3
    },
    /** Available only on ['text', 'bullet-list'] type. The scale multiplier for placeholder lines. For example '2' will double the size of each line */
    lineScale: {
      type: Number,
      default: 1
    },
    /** Available only on ['text', 'bullet-list'] type. The space between each placeholder line. '1.5' would be 1.5 times the space */
    lineHeight: {
      type: Number,
      default: 1.5
    },
    /** Available only on ['text', 'bullet-list'] type. Make each placeholder line rounded */
    roundedCorners: {
      type: Boolean,
      default: true
    },
    /** The main background color for placeholder. Value in HEX or RGB */
    color1: {
      type: String,
      default: '#ccc'
    },
    /** The second background color for placeholder. Value in HEX or RGB */
    color2: {
      type: String,
      default: '#f5f5f5'
    },
    /** Disable/Enable animation on placeholder */
    animation: {
      type: Boolean,
      default: true
    },
    /** The speed of animation in seconds */
    speed: {
      type: Number,
      default: 1.5
    }
  },
  created: async function () {
    await this.loadGraphic()
    this.isLoaded = true
  },
  data () {
    return {
      graphic: null,
      isLoaded: false
    }
  },
  computed: {
    graphicLoader () {
      let graphic = this.type
      graphic = this.imageGraphic ? this.imageGraphic : graphic
      return () => import(`./graphics/${graphic}`)
    },
    computedViewBox () {
      let { type } = this

      if (type === 'text' || type === 'bullet-list') {
        let { lineScale, lineHeight, lines } = this
        let height = (lineScale * 10 * lines) + (lineScale * 10 * (lines - 1) * lineHeight)
        height = type === 'bullet-list' ? height + lineScale * 10 : height
        return `0 0 400 ${height}`
      }

      if (type === 'image') return '0 0 400 400'

      return '0 0 400 240'
    },
    shapeId () {
      return uid()
    }
  },
  methods: {
    async loadGraphic () {
      try {
        this.graphic = await this.graphicLoader()
      } catch (e) {
        throw new Error('Could not load placeholder graphic')
      }
    }
  }
}
</script>

<style lang="scss">
.v-a-placeholder {
  max-width: 50rem;
  $this: &;

  &__graphic {
    display: block;
    width: 100%;
    height: 100%;
  }

  &--image {
    background: $grey-lighter;

    .v-a-placeholder__graphic-container {
      width: 100%;
      position: relative;
    }

    .v-a-placeholder__graphic {
      position: absolute;
      width: 40%;
      height: 40%;
      max-width: 15rem;
      max-height: 15rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
