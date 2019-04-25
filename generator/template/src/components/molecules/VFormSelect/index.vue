<template>
  <div
    :class="[
      'v-m-form-select u-form-field',
      `${disabled ? 'u-form-field--disabled' : ''}`,
      `${error ? 'u-form-field--error' : ''}`
    ]"
  >
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
      <VSelect
        :value="value"
        :disabled="disabled"
        :id="id"
        :emptyValueLabel="emptyValueLabel"
        :options="options"
        :autocomplete="autocomplete"
        :name="name"
        @change="value => $emit('input', value)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>
  </div>
</template>

<script>
import VLabel from 'atoms/VLabel'
import VSelect from 'atoms/VSelect'

import VValidationMessages from 'molecules/VValidationMessages'

import uid from '@/helpers/uid'

export default {
  name: 'VFormSelect',
  components: {
    VLabel,
    VSelect,
    VValidationMessages
  },
  props: {
    /** Label text for the field */
    label: String,
    /** Available options for the select. A single option format is: { label: String, value: String, disabled: Boolean } */
    options: {
      type: Array,
      required: true
    },
    /** Value of the select */
    value: {
      type: String,
      required: true,
      default: ''
    },
    /** Whether the field is required */
    required: {
      type: Boolean,
      default: false
    },
    /** Disabled attribute for the select */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Placeholder text for first item in the select */
    emptyValueLabel: String,
    /** Autocomplete attribute used for browser autocomplete */
    autocomplete: String,
    /** The error messages shown if the input validation is failed */
    errorMessages: [String, Array],
    /** name attribute for select */
    name: String,
    /** Whether select value is invalid */
    error: {
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
.v-m-form-select {
  .v-a-select {
    width: 100%;
  }
}
</style>
