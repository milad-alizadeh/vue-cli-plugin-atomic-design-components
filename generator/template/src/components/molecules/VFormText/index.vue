<template>
  <div :class="[
    'v-m-form-text',
    `${error ? 'v-m-form-text--error' : ''}`,
    `${success ? 'v-m-form-text--success' : ''}`,
    `${disabled ? 'v-m-form-text--disabled' : ''}`
  ]">
    <VLabel
      v-if="label"
      :forAttribute="`#${id}`"
      :error="error"
    >
      <template v-if="required">* </template>{{ label }}
    </VLabel>

    <VInputText
      :id="id"
      :error="error"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="value => $emit('input', value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />

    <VText v-if="error && errorMessage" size="x-small">{{ errorMessage }}</VText>
  </div>
</template>

<script>
import { uid } from '@/helpers'

export default {
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
    errorMessage: String,
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
  }
}
</script>

<style lang="scss">
.v-m-form-text {
  $this: &;

  .v-a-label {
    margin-bottom: 1rem;
  }

  .v-a-input-text {
    margin-bottom: 1rem;
  }

  &--error {
    .v-a-text,
    .v-a-label,
    .v-a-input-text {
      color: $error
    }

    .v-a-input-text {
      border-color: $error
    }
  }

  &--success {
    .v-a-text,
    .v-a-label,
    .v-a-input-text {
      color: $success
    }

    .v-a-input-text {
      border-color: $success
    }
  }

  &--disabled {
    .v-a-input-text {
      background: $grey-lighter;
    }

    .v-a-label {
      color: $grey;
    }
  }
}
</style>
