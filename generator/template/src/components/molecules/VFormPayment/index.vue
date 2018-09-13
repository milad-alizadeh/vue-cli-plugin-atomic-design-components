<template>
  <div
    :class="[
      'v-m-form-payment',
      `${error ? 'v-m-form-payment--error' : ''}`,
      `${success ? 'v-m-form-payment--success' : ''}`,
      `${disabled ? 'v-m-form-payment--disabled' : ''}`
    ]"
  >
    <div class="v-m-form-payment__section v-m-form-payment__section--card-holder">
      <VFormText
        v-model="payment.cardHolder"
        type="text"
        :label="label.cardHolder"
        :placeholder="placeholder.cardHolder"
        autocomplete="cc-name"
      />
    </div>

    <div class="v-m-form-payment__section v-m-form-payment__section--card-number">
      <VFormCreditCardNumber
        v-model="payment.creditCard"
        :label="label.creditCardNumber"
        :placeholder="placeholder.creditCardNumber"
        autocomplete="cc-number"
      />
    </div>

    <div class="v-m-form-payment__section--card-details">
      <VFormText
        v-model="payment.securityCode"
        type="text"
        autocomplete="cc-csc"
        :label="label.securityCode + `${payment.creditCard.type ? ` (${payment.creditCard.type.code.name})` : ''}`"
        :placeholder="placeholder.securityCode"
      />

      <VFormText
        v-model="formattedExpiry"
        type="text"
        :label="label.expiry"
        :placeholder="placeholder.expiry"
        @keypress="isNumberKey"
        autocomplete="cc-exp"
      />
    </div>
  </div>
</template>

<script>
import VIcon from 'atoms/VIcon'
import VLabel from 'atoms/VLabel'
import VInputCreditCard from 'atoms/VInputCreditCard'
import VInputText from 'atoms/VInputText'
import VValidationMessages from 'molecules/VValidationMessages'

import { uid } from '@/helpers'

export default {
  name: 'VFormCreditCard',
  components: {
    VIcon,
    VLabel,
    VInputText,
    VInputCreditCard,
    VValidationMessages
  },
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
    flattenDate (string) {
      return string.replace(/[^0-9]+/g, '')
    },
    isNumberKey (e) {
      let charCode = (e.which) ? e.which : e.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        e.preventDefault()
      } else {
        return true
      }
    },
    formatDate(string) {
      let flattendDate = this.flattenDate(string)
      let formatted
      // console.log(flattendDate.substring(0, 2), flattendDate.substring(3, flattendDate.length));

      if (flattendDate.length >= 3) {
        flattendDate.substring(3, flattendDate.length)
        formatted = flattendDate.substring(0, 2) + '/' + flattendDate.substring(3, flattendDate.length)
      } else {
        formatted = flattendDate
      }

      console.log(flattendDate, formatted)
      //
      // if (flattendDate.length <= 1) return flattendDate
      //
      // if (flattendDate.length >= 4) {
      //   formatted = formatted.substring(0, 5)
      // }
      //
      return formatted
    }
  },
  computed: {
    formattedExpiry: {
      get () {
        return this.formatDate(this.payment.expiry)
      },
      set (newVal) {
        this.payment.expiry = this.flattenDate(newVal)
      }
    },
    uid () {
      return uid()
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
  }
}
</script>

<style lang="scss">
.v-m-form-payment {
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
