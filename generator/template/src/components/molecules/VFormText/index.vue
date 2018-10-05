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
        :required="required"
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
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessages: [String, Array],
    name: String,
    error: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    autocomplete: String,
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
.v-m-form-text {
}
</style>
