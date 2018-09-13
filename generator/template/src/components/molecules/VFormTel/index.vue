<template>
  <div :class="[
    'v-m-form-tel',
    `${error ? 'v-m-form-tel--error' : ''}`,
    `${success ? 'v-m-form-tel--success' : ''}`,
    `${disabled ? 'v-m-form-tel--disabled' : ''}`
  ]">
    <VLabel
      v-if="label"
      :error="error"
    >
      <template v-if="required">* </template>{{ label }}
    </VLabel>

    <VInputTel
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
      :placeholder="placeholder"
    />

    <VValidationMessages :error="error" :errorMessages="errorMessages" />
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
    label: String,
    value: {
      type: [String, Object],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessages: [String, Array],
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
.v-m-form-tel {
  .v-a-label {
    margin-bottom: 1rem;
  }

  .v-a-input-tel {
    margin-bottom: 1rem;
  }

  &--error, {
    .v-a-text,
    .v-a-label,
    .v-a-input-tel {
      color: $error
    }

    .v-a-input-tel {
      border-color: $error
    }
  }

  &--success, {
    .v-a-text,
    .v-a-label,
    .v-a-input-tel {
      color: $success
    }

    .v-a-input-tel {
      border-color: $success
    }
  }
}
</style>
