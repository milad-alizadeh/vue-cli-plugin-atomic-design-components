<template>
  <div :class="[
    'v-m-form-checkbox',
    `${error ? 'v-m-form-checkbox--error' : ''}`,
    `${success ? 'v-m-form-checkbox--success' : ''}`,
    `${disabled ? 'v-m-form-checkbox--disabled' : ''}`
  ]">
    <div
      class="v-m-form-checkbox__question"
      v-if="label && options"
    >
      <VText>
        <template v-if="required">* </template>{{ label }}
      </VText>
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
          `${option.disabled || disabled ? 'v-m-form-checkbox__option--disabled' : '' }`
        ]"
      >
        <VLabel>
          <VInputCheckbox
            v-model="selectedValue"
            :value="option.value"
            :disabled="disabled ? disabled : option.disabled"
            :required="required"
          />

          {{ option.label }}
        </VLabel>
      </div>
    </div>

    <template v-else>
      <div
        :class="[
          'v-m-form-checkbox__option',
          `${disabled ? 'v-m-form-checkbox__option--disabled' : '' }`
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

    <VText v-if="error && errorMessage" size="x-small">{{ errorMessage }}</VText>
  </div>
</template>

<script>
import { uid } from '@/helpers'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: String,
    options: Array,
    errorMessage: String,
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
    },
    success: {
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

  &__question {
    margin-bottom: 1.5rem;
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

    &--disabled {
      .v-a-label {
        color: $grey;
        cursor: not-allowed;
      }

      .v-a-input-checkbox__box {
        background: $grey-light;
      }
    }
  }

  &--error {
    .v-a-text{
      color: $error
    }
  }

  &--success {
    .v-a-text {
      color: $success
    }
  }

  &--disabled {
    .v-a-text,
    .v-a-label {
      color: $grey
    }
  }
}
</style>
