<template>
  <button
    :class="{
      'v-a-hamburger': 1,
      'v-a-hamburger--is-open': isOpen
    }"
    @click="$emit('click')"
  >
    <span class="v-a-hamburger__bar"></span>
  </button>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  }
};
</script>

<style lang="scss">
.v-a-hamburger {
  $this: &;

  appearance: none;
  background-color: $hamburger-background-color;
  border: 0;
  border-radius: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: $hamburger-height;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-indent: -9999px;
  transition: background $hamburger-transistion-duration;
  width: $hamburger-width;

  &:focus {
    outline: none;
  }

  &__bar {
    background: $hamburger-color;
    display: block;
    height: $hamburger-bar-thickness;
    left: $hamburger-pad;
    position: absolute;
    right: $hamburger-pad;
    top: ($hamburger-height / 2) - ($hamburger-bar-thickness / 2);
    transition: background 0s $hamburger-transistion-duration;

    &,
    &::after,
    &::before {
      border-radius: 2px;
    }

    &::after,
    &::before {
      background: $hamburger-color;
      content: '';
      display: block;
      height: $hamburger-bar-thickness;
      left: 0;
      position: absolute;
      width: 100%;
    }

    &::before {
      top: -$hamburger-bar-thickness - $hamburger-bar-space;
      transition: top $hamburger-transistion-duration $hamburger-transistion-duration, transform $hamburger-transistion-duration 0s, background $hamburger-transistion-duration 0s;
    }

    &::after {
      bottom: -$hamburger-bar-thickness - $hamburger-bar-space;
      transition: bottom $hamburger-transistion-duration $hamburger-transistion-duration, transform $hamburger-transistion-duration 0s, background $hamburger-transistion-duration 0s;
    }
  }

  &--is-open {

    #{$this}__bar {
      background: none;

      &::before,
      &::after {
        background-color: $hamburger-color;
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
        transition: top $hamburger-transistion-duration 0s, transform $hamburger-transistion-duration $hamburger-transistion-duration, background $hamburger-transistion-duration 0s;
      }

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom $hamburger-transistion-duration 0s, transform $hamburger-transistion-duration $hamburger-transistion-duration, background $hamburger-transistion-duration 0s;
      }
    }
  }
}
</style>
