<template>
  <div class="v-a-input-checkbox">
    <input
      class="v-a-input-checkbox__input"
      type="checkbox"
      :value="value"
      :id="id"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :name="name"
      @change="toggle"
    >
    <div class="v-a-input-checkbox__box">
      <svg class="v-a-input-checkbox__graphic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInputCheckbox',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    /** Value of checkbox */
    value: {
      type: [String, Boolean],
      reqruied: true
    },
    /** Whether the checkbox is checked. Can also be checked programatically using v-bind. */
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
      type: String,
      default: undefined
    }
  },
  computed: {
    shouldBeChecked () {
      if (this.modelValue === undefined) {
        return this.checked
      }

      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }

      return !!this.modelValue
    }
  },
  methods: {
    toggle () {
      let value
      if (Array.isArray(this.modelValue)) {
        value = [...this.modelValue]

        if (this.shouldBeChecked) {
          value.splice(value.indexOf(this.value), 1)
        } else {
          value.push(this.value)
        }
      } else {
        value = !this.shouldBeChecked
      }

      this.$emit('input', value)
    }
  },
  watch: {
    checked (newValue) {
      if (newValue !== this.shouldBeChecked) {
        this.toggle()
      }
    }
  },
  mounted () {
    if (this.checked && !this.shouldBeChecked) {
      this.toggle()
    }
  }
}
</script>

<style lang="scss">
.v-a-input-checkbox {
  $this: &;
  display: inline-flex;

  &__box {
    width: 2rem;
    height: 2rem;
    background: $blue;
    border-radius: .3rem;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
  }

  &__graphic {
    width: .6em;
    height: .6em;
    fill: $white;
    opacity: 0;
    transition: opacity .2s;
  }

  &__input {
    display: none;

    &:checked + #{$this}__box #{$this}__graphic {
      opacity: 1;
    }
  }
}
</style>
