<template>
  <div
    :class="[
      'v-a-icon',
      `v-a-icon--${color}`,
      `v-a-icon--${size}`
    ]"
  >
    <component v-if="svg" :is="svg" />
  </div>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      required: true,
      type: String
    },
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: String,
      validator (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
      default: 'small'
    }
  },
  created () {
    this.loadSvg()
  },
  computed: {
    svgLoader () {
      return () => import(`./icons/${this.name}.svg`)
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
        throw new Error('Could not load icon svg')
      }
    }
  }
}
</script>

<style lang="scss">
  .v-a-icon {
    display: block;

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
      stroke: currentColor;
      width: 100%;
      height: 100%;
    }
  }

</style>
