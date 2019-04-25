<template>
  <article :class="[
    'v-m-accordion-item',
    isExpanded ? 'v-m-accordion-item--is-expanded' : ''
  ]">
    <header
      class="v-m-accordion-item__header"
      @click="handleClick"
    >
      <div class="v-m-accordion-item__title">
        <VHeading :level="4">
          <slot name="title"></slot>
        </VHeading>
      </div>

      <div class="v-m-accordion-item__icon">
        <VIcon name="chevron-down" size="x-small" />
      </div>
    </header>
    <div
      class="v-m-accordion-item__content"
      :style="`height: ${isExpanded ? height : 0}px;`"
    >
      <div class="v-m-accordion-item__content-inner" ref="content">
        <slot name="content"></slot>
      </div>
    </div>
  </article>
</template>

<script>
import VHeading from 'atoms/VHeading'
import VIcon from 'atoms/VIcon'

import debounce from '@/helpers/debounce'

export default {
  name: 'VAccordionItem',
  components: {
    VHeading,
    VIcon
  },
  props: {
    /** Whether the accordion item should be expanded */
    isOpen: {
      type: Boolean,
      defualt: false
    }
  },
  data () {
    return {
      isExpanded: true,
      height: null
    }
  },
  watch: {
    isOpen (newVal) {
      this.isExpanded = newVal
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.height = this.$refs.content.offsetHeight
      this.isExpanded = this.isOpen
    })
  },
  created () {
    window.addEventListener('resize', debounce(this.getHeight, 100))
  },
  beforeDestroy () {
    window.removeEventListener('resize', debounce(this.getHeight, 100))
  },
  methods: {
    getHeight () {
      this.height = this.$refs.content.offsetHeight
    },
    handleClick () {
      this.isExpanded = !this.isExpanded
      this.$emit('click', this.isExpanded)
    }
  }
}
</script>

<style lang="scss">
.v-m-accordion-item {
  $this: &;

  &__header {
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border: .1rem solid $grey-light;
    cursor: pointer;
    background: $white;
    position: relative;
    z-index: 2;
  }

  &__content {
    transition: height .3s;
    height: auto;
    overflow: hidden;
    border: .1rem solid $grey-light;
    border-top: 0;
    margin-top: -.1rem;
    background: $grey-lighter;
    position: relative;
  }

  &__content-inner {
    padding: 1.5rem;
    transition: transform .3s, opacity .3s;
    opacity: 0;
    transform: translateY(-20px);
  }

  &__icon {
    transition: transform .3s;
  }

  &--is-expanded {
    #{$this}__content-inner{
      opacity: 1;
      transform: none;
    }

    #{$this}__icon {
      transform: rotate(180deg)
    }
  }
}
</style>
