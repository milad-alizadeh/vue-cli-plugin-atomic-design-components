import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    ordered: 'Whether the list is an ordred list'
  }
}

storiesOf('Atom - VList', module)
  .addDecorator(VueInfoAddon)
  .add('unorderd', () => ({
    ...wrapper,
    template: `
      <VList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </VList>
    `
  }))
  .add('ordered', () => ({
    ...wrapper,
    template: `
      <VList ordered>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </VList>
    `
  }))
