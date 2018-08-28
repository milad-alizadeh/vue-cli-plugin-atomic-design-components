<template>
  <input
    :class="[
      'v-a-input-text',
      `v-a-input-text--${type}`
    ]"
    :id="id"
    :type="type"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return [
          'text',
          'email',
          'url',
          'tel',
          'search',
          'password'
        ]
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.v-a-input-text {
  font-size: 1.6rem;
  padding: .5rem;
  border: .1rem solid $grey;
  max-width: 40rem;
  width: 100%;
}
</style>
