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
  name: 'VLabel',
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
  font-size: inherit;
  user-select: none;
  display: flex;
  align-items: center;

  &--error {
    color: $error;
  }

  &--success {
    color: $success;
  }
}
</style>
