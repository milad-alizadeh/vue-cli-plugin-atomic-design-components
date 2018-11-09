<template>
  <header :class="{'v-o-header': 1, 'v-o-header--is-open': menuIsOpen }">
    <div class="v-o-header__bar">
      <router-link to="/" class="v-o-header__logo">
        <VLogo />
      </router-link>

      <div class="v-o-header__hamburger">
        <VHamburger @click="toggleMenu" :isOpen="menuIsOpen" />
      </div>

      <div class="v-o-header__menu">
        <VNavList :list="navList" @click="toggleMenu"/>
      </div>

      <div class="v-o-header__overlay" @click="toggleMenu"></div>
    </div>
  </header>
</template>

<script>
import VLogo from 'atoms/VLogo'
import VHamburger from 'atoms/VHamburger'
import VNavList from 'molecules/VNavList'

export default {
  name: 'VHeader',
  props: {
    navList: Array
  },
  data () {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    }
  },
  components: {
    VHamburger,
    VNavList,
    VLogo
  }
}
</script>

<style lang="scss">
.v-o-header {
  $this: &;
  $animation-speed: .4s;
  $animation-easing: cubic-bezier(0.37, 0.96, 0.22, 1.01);

  &__bar {
    position: relative;
    background-color: $blue;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  &__logo {
    width: 8rem;
  }

  &__hamburger {
    position: relative;
    z-index: 6;
  }

  &__menu {
    align-items: flex-start;
    background: $white;
    display: flex;
    flex-direction: column;
    left: 100%;
    min-height: 100vh;
    position: absolute;
    padding-top: 5rem;
    top: 0;
    transition: transform $animation-speed, opacity $animation-speed, visibility $animation-speed;
    transition-timing-function: $animation-easing;
    visibility: hidden;
    width: 30rem;
    z-index: 5;
  }

  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba($black, .7);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity $animation-speed, visibility $animation-speed;
    transition-timing-function: $animation-easing;
  }

  &--is-open {
    #{$this}__menu {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    #{$this}__overlay {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
