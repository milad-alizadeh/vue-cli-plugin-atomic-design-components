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
            :required="required"
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
    label: String,
    options: Array,
    errorMessages: [String, Array],
    name: String,
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Boolean],
      required: true
    },
    error: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
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
