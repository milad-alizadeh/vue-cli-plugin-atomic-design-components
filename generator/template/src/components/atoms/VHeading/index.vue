<template>
  <component
    :is="type"
    :class="[
      'v-a-heading',
      `v-a-heading--${level}`
    ]"
  >
  <slot v-if="$slots.default && $slots.default[0].text"></slot>
  <template v-else>
    <VPlaceholder
      v-for="(number, index) in placeholderBoxNumber"
      height="2rem"
      :key="index"
      :width="index >= 1 && placeholderBoxNumber - 1 === index ? '80%' : '100%'"
      :marginBottom="index !== placeholderBoxNumber - 1 ? '1rem' : null"
    />
  </template>

  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      validation (val) {
        return [1, 2, 3, 4].indexOf(val) !== -1
      },
      required: true
    },
    placeholderBoxNumber: {
      type: Number,
      default: 2
    }
  },
  computed: {
    type () {
      return `h${this.level}`
    }
  }
}
</script>

<style lang="scss">
.v-a-heading {
  &--1 {
    font-size: 3.2rem;
    line-height: 1.25;

    @include breakpoint($medium) {
      font-size: 4rem;
      line-height: 1.125;
    }

    @include breakpoint($x-large) {
      font-size: 4.8rem;
      line-height: 1.05;
    }
  }

  &--2 {
    font-size: 2.6rem;
    line-height: 1.15384615;

    @include breakpoint($medium) {
      font-size: 3.2rem;
      line-height: 1.25;
    }

    @include breakpoint($x-large) {
      font-size: 3.6rem;
      line-height: 1.25;
    }
  }

  &--3 {
    font-size: 2.2rem;
    line-height: 1.13636364;

    @include breakpoint($medium) {
      font-size: 2.4rem;
      line-height: 1.25;
    }

    @include breakpoint($x-large) {
      font-size: 2.8rem;
      line-height: 1.25;
    }
  }

  &--4 {
    font-size: 1.8rem;
    line-height: 1.1;

    @include breakpoint($medium) {
      font-size: 1.8rem;
      line-height: 1.22;
    }

    @include breakpoint($x-large) {
      font-size: 1.8rem;
      line-height: 1.22;
    }
  }
}
</style>
