<template>
  <div
    :class="[
      'v-o-form-payment',
      `${error ? 'v-o-form-payment--error' : ''}`,
      `${success ? 'v-o-form-payment--success' : ''}`,
      `${disabled ? 'v-o-form-payment--disabled' : ''}`
    ]"
  >
    <div class="v-o-form-payment__section v-o-form-payment__section--card-holder">
      <VFormText
        v-model="payment.cardHolder"
        type="text"
        autocomplete="cc-name"
        :label="label.cardHolder"
        :error="$v.payment.cardHolder.$error"
        :errorMessages="$getErrorMessages('cardHolder')"
        :placeholder="placeholder.cardHolder"
        @blur="$v.payment.cardHolder.$touch()"
      />
    </div>

    <div class="v-o-form-payment__section v-o-form-payment__section--card-number">
      <VFormCreditCardNumber
        v-model="payment.creditCard"
        autocomplete="cc-number"
        :label="label.creditCardNumber"
        :placeholder="placeholder.creditCardNumber"
        :error="$v.payment.creditCard.$error"
        :errorMessages="$getErrorMessages('creditCard')"
        @blur="$v.payment.creditCard.$touch()"
      />
    </div>

    <div class="v-o-form-payment__section--card-details">
      <VFormText
        v-model="payment.securityCode"
        type="text"
        pattern="\d*"
        autocomplete="cc-csc"
        inputmode="numeric"
        :error="$v.payment.securityCode.$error"
        :errorMessages="$getErrorMessages('securityCode')"
        :label="label.securityCode + `${payment.creditCard.type ? ` (${payment.creditCard.type.code.name})` : ''}`"
        :placeholder="placeholder.securityCode"
        @blur="$v.payment.securityCode.$touch()"
        @keypress="handleSecurityKeypress"
      />

      <VFormExpiryDate
        v-model="payment.expiry"
        autocomplete="cc-exp"
        :label="label.expiry"
        :placeholder="placeholder.expiry"
        :error="$v.payment.expiry.$error"
        :errorMessages="$getErrorMessages('expiry')"
        @blur="$v.payment.expiry.$touch()"
      />
    </div>
  </div>
</template>

<script>
// Components
import VFormText from 'molecules/VFormText'
import VFormCreditCardNumber from 'molecules/VFormCreditCardNumber'
import VFormExpiryDate from 'molecules/VFormExpiryDate'

// Validations
import { required, creditCard, expiry, minLength } from '@/validations'
import validationErrorMessages from '@/mixins/validationErrorMessages'

// Helpers
import isNumberKey from '@/helpers/is-number-key'
import limitLength from '@/helpers/limit-length'

export default {
  name: 'VFormCreditCard',
  components: {
    VFormCreditCardNumber,
    VFormText,
    VFormExpiryDate
  },
  mixins: [validationErrorMessages],
  props: {
    label: {
      type: Object,
      default () {
        return {
          cardHolder: '',
          creditCardNumber: '',
          securityCode: '',
          expiry: ''
        }
      }
    },
    placeholder: {
      type: Object,
      default () {
        return {
          cardHolder: '',
          creditCardNumber: '•••• •••• •••• ••••',
          securityCode: 'Security Code',
          expiry: 'MM/YY'
        }
      }
    },
    value: {
      type: Object,
      required: true
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    validations: {
      type: Object,
      default () {
        return {
          payment: {
            creditCard,
            cardHolder: { required, minLength: minLength(3) },
            securityCode: { required },
            expiry
          }
        }
      }
    },
    errorMessages: [String, Array]
  },
  methods: {
    handleSecurityKeypress (e) {
      let size
      if (this.payment.creditCard.type) {
        size = this.payment.creditCard.type.code.size
      }

      limitLength(e, (size || 4))
      isNumberKey(e)
    }
  },
  watch: {
    error (newValue) {
      if (newValue) {
        this.$v.$touch()
      }
    },
    'payment.creditCard' (newValue) {
      this.$emit('input', this.payment)
    },
    'payment.cardHolder' (newValue) {
      this.$emit('input', this.payment)
    },
    'payment.securityCode' (newValue) {
      this.$emit('input', this.payment)
    },
    'payment.expiry' (newValue) {
      this.$emit('input', this.payment)
    },
    value (newValue) {
      let { payment } = this
      let { cardHolder, expiry, securityCode, creditCard } = newValue

      this.$set(payment, 'creditCard', creditCard)
      this.$set(payment, 'securityCode', securityCode)
      this.$set(payment, 'expiry', expiry)
      this.$set(payment, 'cardHolder', cardHolder)
    }
  },
  created () {
    if (this.value) {
      let { cardHolder, expiry, securityCode, creditCard } = this.value
      this.payment.creditCard.number = creditCard ? creditCard.number : ''
      this.payment.cardHolder = cardHolder || ''
      this.payment.expiry = expiry || ''
      this.payment.securityCode = securityCode || ''
    }
  },
  data () {
    return {
      payment: {
        creditCard: {
          number: ''
        },
        cardHolder: '',
        securityCode: '',
        expiry: ''
      }
    }
  },
  validations () {
    return this.validations
  }
}
</script>

<style lang="scss">
.v-o-form-payment {
  display: grid;

  &__section {
    margin-bottom: 1rem;

    &--card-details {
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
