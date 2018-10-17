<template>
  <div class="v-a-input-radio">
    <input
      class="v-a-input-radio__input"
      type="radio"
      :value="value"
      :id="id"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :required="required"
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
    value: {
      type: [String, Boolean],
      required: true
    },
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
    id: String,
    name: String,
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
