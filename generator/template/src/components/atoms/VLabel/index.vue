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
    /** "for" attribute for label */
    htmlFor: String,
    /** If label is for a required input */
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
