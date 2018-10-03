<template>
  <div :class="[
    'v-m-form-text',
    `${error ? 'v-m-form-text--error' : ''}`,
    `${success ? 'v-m-form-text--success' : ''}`,
    `${disabled ? 'v-m-form-text--disabled' : ''}`
  ]">
    <VLabel
      v-if="label"
      :htmlFor="`#${id}`"
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

    <VValidationMessages :error="error" :errorMessages="errorMessages" />
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

  &--error, {
    .v-a-text,
    .v-a-label,
    .v-a-input-text {
      color: $error
    }

    .v-a-input-text {
      border-color: $error
    }
  }

  &--success, {
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
