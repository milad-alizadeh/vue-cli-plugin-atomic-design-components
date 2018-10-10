<template>
  <div class="v-m-accordion">
    <VAccordionItem v-for="item in items" :key="item.title">
      <template slot="title">{{ item.title }}</template>
      <template slot="content"><div v-html="item.content"></div></template>
    </VAccordionItem>
  </div>
</template>

<script>
import VAccordionItem from 'molecules/VAccordionItem'

export default {
  name: 'VAccordion',
  components: {
    VAccordionItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-m-accordion {
  .v-m-accordion-item:not(:last-child) {
    .v-m-accordion-item__content {
      border-bottom: 0
    }
  }
}
</style>
