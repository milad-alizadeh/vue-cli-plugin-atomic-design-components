<template>
  <label
    :for="forAttribute"
    :class="[
      'v-a-label',
      `${error ? 'v-a-label--error' : ''}`,
      `${success ? 'v-a-label--success' : ''}`
    ]"
  >
    <template v-if="required">* </template><slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    forAttribute: String,
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
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
