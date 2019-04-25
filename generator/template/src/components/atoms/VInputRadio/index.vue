<template>
  <div class="v-a-input-radio">
    <input
      class="v-a-input-radio__input"
      type="radio"
      :value="value"
      :id="id"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :name="name"
      @change="toggle"
    >
    <div class="v-a-input-radio__circle"></div>
  </div>
</template>

<script>
export default {
  name: 'VInputRadio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    /** Value of radio button */
    value: {
      type: [String, Boolean],
      required: true
    },
    /** Whether the radio is checked. Can also be checked programatically using v-bind. */
    checked: {
      type: Boolean,
      default: false
    },
    /** Disables the input by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Id attribute for the input */
    id: String,
    /** name attribute for input */
    name: String,
    /** This is a necessary prop for using v-model with this component. Should NOT be set */
    modelValue: {
      default: ''
    }
  },
  computed: {
    shouldBeChecked () {
      if (this.modelValue === null) {
        return this.checked
      }

      return this.modelValue === this.value
    }
  },
  methods: {
    toggle () {
      this.$emit('change', this.value)
    }
  },
  watch: {
    checked (newVal) {
      if (this.checked) {
        this.toggle()
      }
    }
  },
  mounted () {
    if (this.checked) {
      this.toggle()
    }
  }
}
</script>

<style lang="scss">
.v-a-input-radio {
  $this: &;
  display: inline-flex;

  &__circle {
    width: 2rem;
    height: 2rem;
    background: $blue;
    border-radius: 50%;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      width: .5em;
      height: .5em;
      background: $white;
      border-radius: 50%;
      opacity: 0;
      transition: opacity .2s;
    }
  }

  &:focus {
    box-shadow: 0 0 .6rem rgba($black, .4)
  }

  &__input {
    display: none;

    &:checked + #{$this}__circle::before {
      opacity: 1;
    }
  }
}
</style>
