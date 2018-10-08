<template>
  <component
    :class="{
      'v-a-button': 1,
      'v-a-button--disabled': disabled,
      'v-a-button--success': success,
      'v-a-button--error': error,
      'v-a-button--warning': warning
    }"
    :id="id"
    :is="tag"
    :href="href"
    :to="to"
    :target="computedTarget"
    :type="type"
    @click="$emit('click', $event)"
    :disabled="disabled"
  >
    <span class="v-a-button__label">
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    href: String,
    type: String,
    id: String,
    to: [Object, String],
    target: String,
    success: Boolean,
    warning: Boolean,
    error: Boolean,
    disabled: Boolean
  },
  computed: {
    computedTarget () {
      return this.target || (this.href ? '_blank' : null)
    },
    tag () {
      if (this.href) return 'a'
      if (this.to) return 'router-link'
      return 'button'
    }
  }
}
</script>

<style lang="scss">
.v-a-button {
  background: $blue;
  border-radius: .3rem;
  color: $white;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 1;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  user-select: none;

  &__label {
    position: relative;
  }

  &:focus {
    box-shadow: 0 0 .5rem rgba($black, .4)
  }

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition: background .3s;
  }

  &:hover {
    &::before {
      background: rgba(black, .2);
    }
  }

  &--success {
    background: $success;
  }

  &--error {
    background: $error;
  }

  &--warning {
    background: $warning;
  }

  &--disabled {
    background: $disabled;
    cursor: not-allowed;

    &:hover {
      &::before {
        background: none;
      }
    }
  }
}
</style>
