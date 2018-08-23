<template>
  <component
    :is="type"
    :class="[
      'v-a-heading',
      `v-a-heading--${level}`
    ]"
  >
    <slot></slot>
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
