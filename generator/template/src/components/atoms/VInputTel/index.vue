<template>
  <div class="v-a-input-tel">
    <VueTelInput
      ref="inputField"
      v-model="phone"
      :preferredCountries="preferredCountries"
      :placeholder="placeholder"
      @onInput="onInput"
      @onBlur="$emit('blur', { phone, error, country })"
    />
  </div>
</template>

<script>
import VueTelInput from 'vue-tel-input'

export default {
  name: 'VInputTel',
  components: {
    VueTelInput
  },
  props: {
    value: {
      type: [String, Object],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    preferredCountries: {
      type: Array,
      default () {
        return ['gb', 'us']
      }
    }
  },
  data () {
    return {
      phone: this.value.number,
      error: null,
      country: null
    }
  },
  methods: {
    /**
     * @param {String} number
     * the phone number inputted by user, will be formatted along with country code
     * // Ex: inputted: (AU) 0432 432 432
     * // number = '+61432421546'
     *
     * @param {Boolean} isValid
     * @param {String} country
     */
    onInput ({ number, isValid, country }) {
      this.error = !isValid
      this.country = country
      this.$emit('input', { number, error: this.error, country })
    }
  }
}

</script>

<style lang="scss">
@import '../../../../node_modules/vue-tel-input/dist/vue-tel-input.css';

.v-a-input-tel {
  .vue-tel-input {
    border: 0;
    border-radius: 0;
    position: relative;

    &:focus-within {
      box-shadow: none;
      border: 0;
    }
  }

  input {
    font-size: inherit;
    padding: .8rem 1rem;
    color: inherit;
    line-height: 1;
  }

  .iti-flag {
    box-shadow: none;
  }

  .dropdown {
    border-radius: 0;
    position: static;
  }

  .dropdown-item {
    padding: .4rem .8rem;
  }

  ul {
    width: auto;
    top: calc(100% + .1rem);
    left: -.1rem;
    right: -.1rem;
    border: .1rem solid $grey-lighter;
    border-top: 0;
    border-radius: .3rem;
    -webkit-overflow-scrolling: touch;
  }

  li.last-preferred {
    border-bottom: .1rem solid $grey-lighter;
  }
}
</style>
