<template>
  <div
    :class="[
      'v-a-icon',
      `v-a-icon--${color}`,
      `v-a-icon--${size}`,
      `v-a-icon--${name}`
    ]"
    v-html="svg"
  >
  </div>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    /** Icon name. This is the svg filename located in 'atoms/Icon/icons' without .svg extension */
    name: {
      required: true,
      type: String
    },
    /** Icon color */
    color: {
      type: String,
      default: 'black'
    },
    /** Icon size. Options: ['small', 'medium', 'large'] */
    size: {
      type: String,
      validator (value) {
        return ['x-small', 'small', 'medium', 'large'].indexOf(value) !== -1
      },
      default: 'small'
    }
  },
  created () {
    this.loadSvg()
  },
  computed: {
    svgLoader () {
      return () => import(/* webpackChunkName: "Icon" */ `./icons/${this.name}.svg`)
    }
  },
  watch: {
    name () {
      this.loadSvg()
    }
  },
  data () {
    return {
      svg: null
    }
  },
  methods: {
    async loadSvg () {
      try {
        let comp = await this.svgLoader()
        this.svg = comp.default
      } catch (e) {
        throw new Error(`Could not load icon svg - ${e}`)
      }
    }
  }
}
</script>

<style lang="scss">
.v-a-icon {
  display: block;

  &--x-small {
    width: 1.8rem;
    height: 1.8rem;
  }

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
    color: $error
  }

  &--black {
    color: $black;
  }

  svg {
    display: block;
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
}
</style>
