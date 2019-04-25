<template>
  <div :class="[
    'v-m-table',
    stickyHeader ? 'v-m-table--sticky-header' : ''
  ]"
  :style="maxHeight ? `max-height: ${maxHeight}px`: null"
  >
    <div class="v-m-table__inner">
      <table class="v-m-table__main">
        <caption class="v-m-table__caption">
          <slot name="caption"></slot>
        </caption>

        <thead class="v-m-table__head">
          <slot name="head"></slot>
        </thead>

        <tbody class="v-m-table__body">
          <slot name="body"></slot>
        </tbody>

        <tfoot class="v-m-table__foot">
          <slot name="foot"></slot>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    /** Enable/Dsiable sticky header for the table */
    stickyHeader: {
      type: Boolean,
      default: false
    },
    /** max-height of table */
    maxHeight: Number
  }
}
</script>

<style lang="scss">
.v-m-table {
  $this: &;

  max-width: 100%;
  display: inline-flex;
  overflow: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: .7rem;
    height: .7rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: .4rem;
    background-color: rgba(0, 0, 0, .5);
  }

  &__main {
    border-collapse: collapse;
  }

  &--sticky-header {
    #{$this}__head .v-a-table-cell {
      position: sticky;
      top: 0;
      z-index: 10;
      max-height: 200px;

      &::after {
        content:'';
        position:absolute;
        left: 0;
        width: 100%;
        top: -1px;
        height: calc(100% + 2px);
        border-bottom: .1rem solid $grey-light;
        border-top: .1rem solid $grey-light;
      }
    }
  }
}
</style>
