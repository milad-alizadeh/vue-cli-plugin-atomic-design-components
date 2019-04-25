<template>
  <fieldset :class="[
    'v-m-form-radio u-form-field',
    `${error ? 'u-form-field--error' : ''}`,
    `${disabled ? 'u-form-field--disabled' : ''}`
  ]">
    <div class="v-m-form-radio__question u-form-field__label" v-if="label">
      <VText tag="legend">
        <template v-if="required">* </template>{{ label }}
      </VText>
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>

    <div class="v-m-form-radio__options u-form-field__label">
      <div
        v-for="option in options"
        :class="[
          'v-m-form-radio__option',
          `${option.disabled || disabled ? 'u-form-field__option--disabled' : '' }`
        ]"
        :key="option.value"
      >
        <VLabel>
          <VInputRadio
            v-model="selectedValue"
            :value="option.value"
            :checked="disabled ? false : option.checked"
            :disabled="disabled ? disabled : option.disabled"
            :name="name"
          />

          {{ option.label }}
        </VLabel>
      </div>
    </div>
  </fieldset>
</template>

<script>
import VLabel from 'atoms/VLabel'
import VText from 'atoms/VText'
import VInputRadio from 'atoms/VInputRadio'
import VValidationMessages from 'molecules/VValidationMessages'

import uid from '@/helpers/uid'

export default {
  name: 'VFormRadio',
  components: {
    VLabel,
    VText,
    VInputRadio,
    VValidationMessages
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /** The label for all the options. Generally is a question */
    label: String,
    /** An array of option objects. displayed as radio buttons. Option format is:
    {
      label: String,
      value: String,
      checked: Boolean,
      disabled: Boolean
    }
    */
    options: {
      type: Array,
      required: true
    },
    /** The error message shown if the input validation is failed */
    errorMessages: [String, Array],
    /** name attribute for input */
    name: String,
    /** Whether input value is invalid */
    error: {
      type: Boolean,
      default: false
    },
    /** Value of the field */
    value: {
      type: String,
      default: ''
    },
    /** Whether this field is reuqired */
    required: {
      type: Boolean,
      default: false
    },
    /** Whether this field is disabled */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return uid()
    }
  },
  watch: {
    selectedValue (newValue) {
      this.$emit('change', newValue)
    }
  },
  data () {
    return {
      selectedValue: null
    }
  }
}
</script>

<style lang="scss">
.v-m-form-radio {
  &__option {
    margin-bottom: 1.5rem;

    .v-a-input-radio {
      margin-right: .5rem;
    }

    .v-a-label {
      display: inline-flex;
      cursor: pointer;
    }
  }
}
</style>
