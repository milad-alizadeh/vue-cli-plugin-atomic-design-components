<template>
  <label
    :for="htmlFor"
    class="v-a-label"
  >
    <template v-if="required">* </template><slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    htmlFor: String,
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-a-label {
  font-size: 1.6rem;
  display: block;
  user-select: none;

  &--error {
    color: $error;
  }

  &--success {
    color: $success;
  }
}
</style>
