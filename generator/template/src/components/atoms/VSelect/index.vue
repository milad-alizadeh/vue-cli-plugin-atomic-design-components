<template>
  <div class="v-a-select">
    <select
      class="v-a-select__input"
      v-model="localValue"
      :name="name"
      :disabled="disabled"
      :required="required"
      :id="id"
      @change="$emit('change', $event.target.value)"
    >
    <option disabled value="">{{ emptyValueLabel }}</option>
    <option
      v-for="option in options"
      :value="option.value"
      :key="option.value"
      :selected="option.selected"
      :disabled="disabled ? disabled : option.disabled"
    >{{ option.label }}</option>
    </select>

    <svg class="v-a-select__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.929 284.929">
      <path d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"/>
    </svg>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      reqruied: true
    },
    value: {
      type: String,
      default: ''
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
    emptyValueLabel: {
      type: String,
      default: 'Please select one'
    }
  },
  data () {
    return {
      localValue: this.value
    }
  }
}
</script>

<style lang="scss">
.v-a-select {
  $arrow-color: $grey-light;
  $background: $grey-light;
  position: relative;
  display: inline-flex;

  &__input {
    padding: .8rem 1.2rem;
    display: block;
    font-size: 1.6rem;
    padding-right: 5rem;
    border: .1rem solid $grey-light;
    border-radius: .3rem;
    background: $white;
  }

  &__arrow {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 1rem;
    fill: $arrow-color;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
