<template>
  <div class="v-a-input-tel">
    <VueTelInput
      @onInput="onInput"
      @onBlur="$emit('blur', { phone, error, country })"
      :preferredCountries="preferredCountries"
      :placeholder="placeholder"
      v-model="phone"
      ref="inputField"
    />
  </div>
</template>

<script>
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

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
  .v-a-input-tel {
    $border-color: $grey-light;
    $border-radius: .3rem;
    $focus: 0 0 .6rem rgba($black, .4);
    border: .1rem solid $border-color;
    border-radius: $border-radius;

    &:focus-within {
      box-shadow: $focus;
      border: .1rem solid $border-color;
    }

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
      font-size: 1.6rem;
      padding: .8rem 1rem;
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
      border: .1rem solid $border-color;
      border-top: 0;
      border-radius: $border-radius;
      -webkit-overflow-scrolling: touch;
    }

    li.last-preferred {
      border-bottom: .1rem solid $border-color;
    }

  }
</style>
