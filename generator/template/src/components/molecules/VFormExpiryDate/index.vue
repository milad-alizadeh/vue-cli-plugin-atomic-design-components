<template>
  <div :class="[
    'v-m-form-expiry-date',
    `${error ? 'v-m-form-expiry-date--error' : ''}`,
    `${success ? 'v-m-form-expiry-date--success' : ''}`,
    `${disabled ? 'v-m-form-expiry-date--disabled' : ''}`
  ]">
    <VLabel
      v-if="label"
      :htmlFor="`#${id}`"
    >
      <template v-if="required">* </template>{{ label }}
    </VLabel>
    <VInputText
      v-model="formattedExpiry"
      :id="id"
      type="text"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :autocomplete="autocomplete"
      pattern="[0-9/]+"
      inputmode="numeric"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @keypress="format"
      @change="handleChange"
      @paste="onPaste"
    />

    <VValidationMessages :error="error" :errorMessages="errorMessages" />
  </div>
</template>

<script>
import VValidationMessages from 'molecules/VValidationMessages'
import VInputText from 'atoms/VInputText'
import VLabel from 'atoms/VLabel'

import { uid, limitLength, isNumberKey, onlyDigits } from '@/helpers'

export default {
  name: 'VFormExpiryDate',
  components: {
    VValidationMessages,
    VInputText,
    VLabel
  },
  props: {
    name: String,
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'MM/YY'
    },
    errorMessages: [String, Array],
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
    autocomplete: {
      type: String,
      default: 'cc-exp'
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expiry: this.value ? onlyDigits(this.value).slice(0, 4) : '',
      lastDate: ''
    }
  },
  computed: {
    id () {
      return uid()
    },
    formattedExpiry: {
      get () {
        return this.formatDate(this.expiry)
      },
      set (newVal) {
        this.expiry = onlyDigits(newVal).slice(0, 4)
        this.$emit('input', this.expiry)
      }
    }
  },
  watch: {
    'value' (newValue) {
      this.expiry = onlyDigits(newValue).slice(0, 4)
    }
  },
  methods: {
    handleChange (e) {
      let { value } = e.target
      this.expiry = onlyDigits(value).slice(0, 4)
    },
    format (e) {
      limitLength(e, 5)
      isNumberKey(e)
    },
    onPaste (e) {
      let clipboardData = e.clipboardData || window.clipboardData
      let pastedData = clipboardData.getData('Text')
      let isNumber = pastedData.match(/^[0-9/]+$/g)

      if (isNumber) {
        this.expiry = onlyDigits(pastedData).slice(0, 4)
      } else {
        e.preventDefault()
      }
    },
    formatDate (date) {
      let digitDate = date
      let formatted = ''
      let length = digitDate.length
      let month = ''
      let year = ''

      if (length) {
        switch (length) {
          case 1:
            month = digitDate.slice(0, 1)
            if (month > 1) month = `0${month}`
            break

          case 2:
            month = digitDate.slice(0, 2)
            if (month > 12) month = 12
            break

          case 3:
            month = digitDate.slice(0, 2)
            year = digitDate.charAt(2)
            break

          default:
            month = digitDate.slice(0, 2)
            year = digitDate.slice(2, 4)
        }

        formatted = month + (month.length >= 2 ? `/${year}` : '')

        if (this.lastDate.length >= digitDate.length) {
          this.lastDate = ''
          return ''
        } else {
          this.lastDate = digitDate
        }
      }

      return formatted
    }
  }
}
</script>

<style lang="scss">
.v-m-form-expiry-date {
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
