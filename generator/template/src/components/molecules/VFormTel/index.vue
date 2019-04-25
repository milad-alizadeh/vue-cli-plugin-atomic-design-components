<template>
  <div :class="[
    'v-m-form-tel u-form-field',
    `${error ? 'u-form-field--error' : ''}`,
    `${disabled ? 'u-form-field--disabled' : ''}`
  ]">
    <div class="u-form-field__label">
      <VLabel
        v-if="label"
        :error="error"
      >
        <template v-if="required">* </template>{{ label }}
      </VLabel>
    </div>

    <div class="u-form-field__input">
      <VInputTel
        :value="value"
        :placeholder="placeholder"
        @input="handleInput"
        @blur="handleBlur"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>
  </div>
</template>

<script>
import VInputTel from 'atoms/VInputTel'
import VLabel from 'atoms/VLabel'
import VValidationMessages from 'molecules/VValidationMessages'

export default {
  name: 'VFormTel',
  components: {
    VInputTel,
    VLabel,
    VValidationMessages
  },
  props: {
    /** Label text for the field */
    label: String,
    /** Value of the select */
    value: {
      type: [String, Object],
      default: ''
    },
    /** Placeholder text for the input */
    placeholder: {
      type: String,
      default: ''
    },
    /** The error messages shown if the input validation is failed */
    errorMessages: [String, Array],
    /** Whether the field is required */
    required: {
      type: Boolean,
      default: false
    },
    /** Disabled attribute for the select */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      error: null,
      phoneNumber: this.value.number
    }
  },
  methods: {
    handleBlur ({ error }) {
      this.error = error
    },
    handleInput ({ number, error, country }) {
      this.phoneNumberData = country
      if (this.error !== null) {
        this.error = error
      }

      this.$emit('input', { number, country })
    }
  }
}
</script>

<style lang="scss">
.v-m-form-tel {}
</style>
