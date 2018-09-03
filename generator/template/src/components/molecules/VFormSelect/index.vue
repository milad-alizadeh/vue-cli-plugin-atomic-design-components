<template>
  <div
    :class="[
      'v-m-form-select',
      `${disabled ? 'v-m-form-select--disabled' : ''}`,
      `${error ? 'v-m-form-select--error' : ''}`,
      `${success ? 'v-m-form-select--success' : ''}`
    ]"
  >
    <VLabel
      v-if="label"
      :htmlFor="`#${id}`"
      :error="error"
    >
      <template v-if="required">* </template>{{ label }}
    </VLabel>

    <VSelect
      :value="value"
      :disabled="disabled"
      :required="required"
      :id="id"
      :emptyValueLabel="emptyValueLabel"
      :options="options"
      @change="value => $emit('input', value)"
    />

    <VText v-if="error && errorMessage" size="x-small">{{ errorMessage }}</VText>
  </div>
</template>

<script>
import { uid } from '@/helpers'

export default {
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
    errorMessage: String,
    error: {
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
.v-m-form-select {
  .v-a-label {
    margin-bottom: 1rem;
  }

  .v-a-select {
    margin-bottom: 1rem;
  }

  &--error {
    .v-a-text,
    .v-a-label,
    .v-a-select {
      color: $error
    }

    .v-a-select__input {
      border-color: $error
    }

    .v-a-select__arrow {
      fill: $error
    }
  }

  &--success {
    .v-a-text,
    .v-a-label,
    .v-a-select {
      color: $success
    }

    .v-a-select__input {
      border-color: $success
    }

    .v-a-select__arrow {
      fill: $success
    }
  }

  &--disabled {
    .v-a-select {
      background: $grey-lighter;
    }

    .v-a-label {
      color: $grey;
    }
  }
}
</style>
