<template>
  <div :class="[
    'v-m-form-text u-form-field',
    `${error ? 'u-form-field--error' : ''}`,
    `${disabled ? 'u-form-field--disabled' : ''}`
  ]">
    <div class="u-form-field__label">
      <VLabel
        v-if="label"
        :htmlFor="`#${id}`"
        :error="error"
      >
        <template v-if="required">* </template>{{ label }}
      </VLabel>
    </div>

    <div class="u-form-field__input">
      <VInputText
        :id="id"
        :error="error"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :value="value"
        :name="name"
        :inputmode="inputmode"
        :pattern="pattern"
        @input="value => $emit('input', value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keypress="$emit('keypress', $event)"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>
  </div>
</template>

<script>
import VInputText from 'atoms/VInputText'
import VLabel from 'atoms/VLabel'
import VValidationMessages from 'molecules/VValidationMessages'

import uid from '@/helpers/uid'

export default {
  name: 'VFormText',
  components: {
    VInputText,
    VLabel,
    VValidationMessages
  },
  props: {
    /** Label text for the field */
    label: String,
    /** Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password'] */
    type: {
      type: String,
      default: 'text'
    },
    /** Value of the input */
    value: {
      type: String,
      default: ''
    },
    /** Placeholder text for the input */
    placeholder: {
      type: String,
      default: ''
    },
    /** The error message shown if the input validation is failed */
    errorMessages: [String, Array],
    /** Name attribute for input */
    name: String,
    /** Whether input value is invalid */
    error: {
      type: Boolean,
      default: false
    },
    /** Pattern attribute for input (used for mobile keypad) */
    pattern: {
      type: String,
      default: null
    },
    /** inputmode attribute for input (used for mobile keypad) */
    inputmode: {
      type: String,
      default: null
    },
    /** Whether the field is required */
    required: {
      type: Boolean,
      default: false
    },
    /** Autocomplete attribute used for browser autocomplete */
    autocomplete: String,
    /** Disabled attribute for the input */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return uid()
    }
  }
}
</script>

<style lang="scss">
.v-m-form-text {}
</style>
