<template>
  <li class="v-a-nav-item" @click="$emit('click', $event)">
    <a v-if="href" :href="href" target="_blank">
      <slot></slot>
    </a>
    <router-link v-else :to="to">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: [String, Object],
    href: String
  }
}
</script>

<style lang="scss">
.v-a-nav-item {
  list-style: none;
  display: block;

  a {
    color: $black;
    background: $grey-lighter;
    transition: background .3s;
    display: block;
    padding: 1rem;
    @include text-medium();

    &:hover {
      background: $grey-light;
    }
  }
}
</style>
