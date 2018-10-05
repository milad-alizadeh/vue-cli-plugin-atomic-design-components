<template>
  <div class="v-a-input-credit-card">
    <input
      :id="id"
      v-model="formatted"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :name="name"
      :placeholder="placeholder"
      type="text"
      pattern="[0-9 ]+"
      inputmode="numeric"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @keypress="isNumberKey"
      @paste="onPaste"
      @change="handleChange"
    >
  </div>
</template>

<script>
import creditCardType from 'credit-card-type'

export default {
  name: 'VInputCreditCard',
  props: {
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
      default: 'cc-number'
    },
    value: {
      type: [Object, String],
      default: ''
    },
    id: String,
    name: String,
    placeholder: String
  },
  data () {
    return {
      creditCardNumber: this.removeSpace(this.value.number)
    }
  },
  computed: {
    formatted: {
      get () {
        return this.format(this.creditCardNumber, this.type)
      },
      set (newValue) {
        this.creditCardNumber = this.removeSpace(newValue)
      }
    },
    type () {
      let types = creditCardType(this.creditCardNumber)
      let type = types && types.length === 1 ? types[0] : null

      this.$emit('input', {
        number: this.creditCardNumber,
        type
      })

      return type
    }
  },

  watch: {
    'value.number' (newValue) {
      this.creditCardNumber = this.removeSpace(newValue)
    }
  },

  methods: {
    removeSpace (string) {
      if (string) {
        return string.replace(/\s|\./g, '')
      }
    },
    handleChange (e) {
      this.creditCardNumber = this.removeSpace(e.target.value)
    },
    onPaste (e) {
      let clipboardData = e.clipboardData || window.clipboardData
      let pastedData = clipboardData.getData('Text')
      let isNumber = pastedData.match(/^[0-9 ]+$/g)

      if (isNumber) {
        this.creditCardNumber = this.removeSpace(pastedData)
      } else {
        e.preventDefault()
      }
    },
    isNumberKey (e) {
      let charCode = (e.which) ? e.which : e.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        e.preventDefault()
      } else {
        return true
      }
    },
    format (creditCardNumber, type) {
      let number = creditCardNumber

      if (type) {
        let { gaps, lengths } = type
        let parts = []
        let lastGap = 0
        let maxCardNumber = Math.max(...lengths)
        let remaining

        gaps.forEach(gap => {
          let part = number.substring(lastGap, gap)
          if (part) parts.push(part)
          lastGap = gap
        })

        remaining = number.substring(lastGap, maxCardNumber)
        if (parts.length) {
          number = parts.join(' ') + `${remaining ? ` ${remaining}` : remaining}`
        }
      }

      return number
    }
  }
}
</script>

<style lang="scss">
.v-a-input-credit-card {
  border: .1rem solid $grey-light;
  width: 100%;
  border-radius: .3rem;
  position: relative;

  input {
    width: 100%;
    font-size: inherit;
    padding: .9rem 1rem;
    border: 0;
    background: none;
    color: inherit;
  }
}
</style>
