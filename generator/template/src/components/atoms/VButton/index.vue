<template>
  <component
    :class="{
      'v-a-button': 1,
      'v-a-button--disabled': disabled,
      'v-a-button--success': success,
      'v-a-button--error': error,
      'v-a-button--warning': warning
    }"
    :is="type"
    :href="href"
    :to="to"
    :target="href ? '_blank' : null"
    @click="$emit('click')"
    :disabled="disabled"
  >
  <span class="v-a-button__label">
    <slot></slot>
  </span>
  </component>
</template>

<script>
export default {
  props: {
    href: String,
    to: [Object, String],
    success: Boolean,
    warning: Boolean,
    error: Boolean,
    disabled: Boolean
  },
  computed: {
    type () {
      if (this.href) return 'a'
      if (this.to) return 'router-link'
      return 'button'
    }
  }
}
</script>

<style lang="scss">
  .v-a-button {
    background: #2196f3;
    border-radius: .3rem;
    color: #fff;
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
