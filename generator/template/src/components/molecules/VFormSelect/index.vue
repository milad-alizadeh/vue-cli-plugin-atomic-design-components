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
        :required="required"
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
    label: String,
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    emptyValueLabel: String,
    autocomplete: String,
    errorMessages: [String, Array],
    name: String,
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
