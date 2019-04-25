<template>
  <fieldset
    :class="[
      'v-m-form-credit-card-number u-form-field',
      `${error ? 'u-form-field--error' : ''}`,
      `${disabled ? 'u-form-field--disabled' : ''}`
    ]"
  >
    <div class="u-form-field__label">
      <VLabel
        v-if="label"
        :htmlFor="`#card-number${uid}`"
      >{{ label }}</VLabel>
    </div>

    <div class="v-m-form-credit-card-number__field u-form-field__input">
      <VInputCreditCard
        v-model="creditCard"
        :id="`card-number${uid}`"
        :placeholder="placeholder"
        @blur="$emit('blur')"
        :name="name"
        @focus="$emit('focus')"
      />

      <transition name="fade">
        <VIcon
          v-if="creditCard.type"
          :name="creditCard.type ? `credit-card-${creditCard.type.type}`: ''"
          size="medium"
        />
      </transition>
    </div>

    <div class="u-form-field__validation-messages">
      <VValidationMessages :error="error" :errorMessages="errorMessages" />
    </div>

  </fieldset>
</template>

<script>
import VIcon from 'atoms/VIcon'
import VLabel from 'atoms/VLabel'
import VInputCreditCard from 'atoms/VInputCreditCard'
import VValidationMessages from 'molecules/VValidationMessages'

import uid from '@/helpers/uid'

export default {
  name: 'VFormCreditCardNumber',
  components: {
    VIcon,
    VLabel,
    VInputCreditCard,
    VValidationMessages
  },
  props: {
    /** The label for all the options. Generally is a question */
    label: String,
    /** Value of the field */
    value: {
      type: Object,
      required: true
    },
    /** Placeholder text for input */
    placeholder: {
      type: String,
      default: '•••• •••• •••• ••••'
    },
    /** Whether this field is disabled */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Whether this field is reuqired */
    required: {
      type: Boolean,
      default: false
    },
    /** Whether input value is invalid */
    error: {
      type: Boolean,
      default: false
    },
    /** name attribute for input */
    name: String,
    /** /** Autocomplete attribute used for browser autocomplete */
    autocomplete: String,
    /** The error messages shown if the input validation is failed */
    errorMessages: [String, Array]
  },
  computed: {
    uid () {
      return uid()
    }
  },
  watch: {
    'value.number' (newValue) {
      this.$set(this.creditCard, 'number', newValue)
    },
    creditCard (newValue) {
      this.$emit('input', newValue)
    }
  },
  data () {
    return {
      creditCard: {
        number: this.value.number,
        type: null
      }
    }
  }
}
</script>

<style lang="scss">
.v-m-form-credit-card-number {
  .v-a-icon {
    position: absolute;
    right: 1rem;
    bottom: 0;
    top: 0;
    margin: auto;
  }
}
</style>
