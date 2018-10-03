<template>
  <fieldset
    :class="[
      'v-m-form-credit-card-number',
      `${error ? 'v-m-form-credit-card-number--error' : ''}`,
      `${success ? 'v-m-form-credit-card-number--success' : ''}`,
      `${disabled ? 'v-m-form-credit-card-number--disabled' : ''}`
    ]"
  >
    <VLabel
      v-if="label"
      :htmlFor="`#card-number${uid}`"
    >{{ label }}</VLabel>

    <div class="v-m-form-credit-card-number__field">
      <VInputCreditCard
        v-model="creditCard"
        :id="`card-number${uid}`"
        :placeholder="placeholder"
        @blur="$emit('blur')"
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

    <VValidationMessages :error="error" :errorMessages="errorMessages" />
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
    label: String,
    value: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      default: '•••• •••• •••• ••••'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    autocomplete: String,
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
  .v-a-label {
    margin-bottom: 1rem;
  }

  .v-a-input-credit-card {
    margin-bottom: 1rem;
  }

  .v-a-icon {
    position: absolute;
    right: 1rem;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  &__field {
    position: relative;
  }

  &--error, {
    .v-a-text,
    .v-a-label,
    .v-a-input-credit-card {
      color: $error
    }

    .v-a-input-credit-card {
      border-color: $error
    }
  }

  &--success, {
    .v-a-text,
    .v-a-label,
    .v-a-input-credit-card {
      color: $success
    }

    .v-a-input-credit-card {
      border-color: $success
    }
  }

  &--disabled {
    .v-a-input-credit-card {
      background: $grey-lighter;
    }

    .v-a-label {
      color: $grey;
    }
  }
}
</style>
