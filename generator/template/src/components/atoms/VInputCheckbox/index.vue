<template>
  <div class="v-a-input-checkbox">
    <input
      type="checkbox"
      class="v-a-input-checkbox__input"
      :value="value"
      :id="id"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :required="required"
      @change="onChange"
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
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: [String, Boolean],
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    modelValue: {
      default: ''
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    shouldBeChecked () {
      if (this.modelValue === null) {
        return this.checked
      }

      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }

      return this.modelValue === this.trueValue
    }
  },
  methods: {
    toggle (isChecked) {
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    },
    onChange (event) {
      this.toggle(event.target.checked)
    }
  },
  watch: {
    checked (newVal) {
      if (this.checked) {
        this.toggle(newVal)
      }
    }
  },
  mounted () {
    if (this.checked) {
      this.toggle(this.checked)
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
