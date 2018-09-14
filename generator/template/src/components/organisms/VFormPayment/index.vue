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
        :label="label.cardHolder"
        :error="$v.payment.cardHolder.$error"
        @blur="$v.payment.cardHolder.$touch()"
        :errorMessages="$getErrorMessages('cardHolder')"
        :placeholder="placeholder.cardHolder"
        autocomplete="cc-name"
      />
    </div>

    <div class="v-o-form-payment__section v-o-form-payment__section--card-number">
      <VFormCreditCardNumber
        v-model="payment.creditCard"
        :label="label.creditCardNumber"
        :placeholder="placeholder.creditCardNumber"
        :error="$v.payment.creditCard.$error"
        @blur="$v.payment.creditCard.$touch()"
        :errorMessages="$getErrorMessages('creditCard')"
        autocomplete="cc-number"
      />
    </div>

    <div class="v-o-form-payment__section--card-details">
      <VFormText
        v-model="payment.securityCode"
        type="text"
        autocomplete="cc-csc"
        :error="$v.payment.securityCode.$error"
        @blur="$v.payment.securityCode.$touch()"
        :errorMessages="$getErrorMessages('securityCode')"
        @keypress="handleSecurityKeypress"
        :label="label.securityCode + `${payment.creditCard.type ? ` (${payment.creditCard.type.code.name})` : ''}`"
        :placeholder="placeholder.securityCode"
      />

      <VFormExpiryDate
        v-model="payment.expiry"
        :label="label.expiry"
        :placeholder="placeholder.expiry"
        :error="$v.payment.expiry.$error"
        @blur="$v.payment.expiry.$touch()"
        :errorMessages="$getErrorMessages('expiry')"
        autocomplete="cc-exp"
      />
    </div>
  </div>
</template>

<script>
import VFormText from 'molecules/VFormText'
import VFormCreditCardNumber from 'molecules/VFormCreditCardNumber'
import VFormExpiryDate from 'molecules/VFormExpiryDate'
import VValidationMessages from 'molecules/VValidationMessages'

import { required, creditCard, expiry } from '@/validations'
import { limitLength, isNumberKey } from '@/helpers'
import validationErrorMessages from '@/mixins/validationErrorMessages'

export default {
  name: 'VFormCreditCard',
  components: {
    VFormCreditCardNumber,
    VFormText,
    VFormExpiryDate,
    VValidationMessages
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
  validations: {
    payment: {
      creditCard,
      cardHolder: {
        required
      },
      securityCode: {
        required
      },
      expiry
    }
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
