<template>
  <div class="v-a-input-radio">
    <input
      type="radio"
      class="v-a-input-radio__input"
      :value="value"
      :id="id"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :required="required"
      @change="toggle"
    >
    <div class="v-a-input-radio__graphic"></div>
  </div>
</template>

<script>
export default {
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
    id: {
      type: String
    },
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

  &__graphic {
    width: 2rem;
    height: 2rem;
    background: $black;
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
      transition: opacity .3s;
    }
  }

  &__input {
    display: none;

    &:checked + #{$this}__graphic:before {
      opacity: 1;
    }
  }
}
</style>
