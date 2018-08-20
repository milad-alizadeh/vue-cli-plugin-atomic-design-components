<template>
  <div
    class="v-a-placeholder"
    :style="`width: ${width}; height: ${height}; margin-bottom: ${marginBottom}`"
  >
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.4rem'
    },
    marginBottom: String
  }
}
</script>

<style lang="scss">
.v-a-placeholder {
  position: relative;
  overflow: hidden;
  background-color: rgba($black, .2);

  &::before {
    content: '';
    @include full-absolute;
    animation-duration: .6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-size: cover;
    left: -100%;
    background: linear-gradient(to right, rgba($white, 0) 0%, rgba($white, .3) 50%, rgba($white, 0) 100%);
  }
}

@keyframes placeHolderShimmer{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(200%);
  }
}

</style>
