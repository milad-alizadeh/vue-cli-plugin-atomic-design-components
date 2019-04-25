<template>
  <fieldset :class="[
    'v-m-form-checkbox u-form-field',
    `${error ? 'u-form-field--error' : ''}`,
    `${disabled ? 'u-form-field--disabled' : ''}`
  ]">
    <div
      class="v-m-form-checkbox__question u-form-field__label"
      v-if="label && options"
    >
      <VText tag="legend">
        <template v-if="required">* </template>{{ label }}
      </VText>
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>

    <div
      v-if="options"
      class="v-m-form-checkbox__options"
    >
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          'v-m-form-checkbox__option',
          'u-form-field__label',
          `${option.disabled || disabled ? 'u-form-field__option--disabled' : '' }`
        ]"
      >
        <VLabel>
          <VInputCheckbox
            v-model="selectedValue"
            :value="option.value"
            :disabled="disabled ? disabled : option.disabled"
            :name="name"
          />

          {{ option.label }}
        </VLabel>
      </div>
    </div>

    <template v-else>
      <div
        :class="[
          'v-m-form-checkbox__option',
          `${disabled ? 'u-form-field--disabled' : '' }`
        ]"
      >
        <VLabel>
          <VInputCheckbox
            v-model="selectedValue"
            :disabled="disabled"
            :checked="checked"
          />

          {{ label }}
        </VLabel>
      </div>
    </template>
  </fieldset>
</template>

<script>
import VLabel from 'atoms/VLabel'
import VText from 'atoms/VText'
import VInputCheckbox from 'atoms/VInputCheckbox'
import VValidationMessages from 'molecules/VValidationMessages'

import uid from '@/helpers/uid'

export default {
  name: 'VFormCheckbox',
  components: {
    VLabel,
    VText,
    VInputCheckbox,
    VValidationMessages
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /** The label for all the options. Generally is a question */
    label: String,
    /** An array of option objects. displayed as chekcboxes. A single option format is:
    {
      label: String,
      value: String,
      disabled: Boolean
    }
    */
    options: Array,
    /** The error messages shown if the input validation is failed */
    errorMessages: [String, Array],
    /** Name attribute for input */
    name: String,
    /** Used to check the input by default. Works only on single checkboxes */
    checked: {
      type: Boolean,
      default: false
    },
    /** Value of the field */
    value: {
      type: [Array, Boolean],
      required: true
    },
    /** Whether input value is invalid */
    error: {
      type: Boolean,
      default: false
    },
    /** Whether this field is disabled */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Whether field is required */
    required: {
      type: Boolean,
      default: false
    },
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
  },
  mounted () {
    if (this.options && this.options.length) {
      if (this.value instanceof Array && this.value.length) {
        this.selectedValue = this.value
      } else {
        this.selectedValue = []
      }
    }
  }
}
</script>

<style lang="scss">
.v-m-form-checkbox {
  $this: &;
  border: 0;

  .v-m-validation-messages {
    margin-bottom: 1rem;
    margin-top: -1rem;
  }

  &__option {
    margin-bottom: 1.5rem;

    .v-a-input-checkbox {
      margin-right: .5rem;
    }

    .v-a-label {
      display: inline-flex;
      cursor: pointer;
    }
  }
}
</style>
