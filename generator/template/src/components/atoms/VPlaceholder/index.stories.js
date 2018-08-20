import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    width: 'width of the box added as inline css',
    height: 'height of the box added as inline css',
    marginBottom: 'margin-bottom of the box added as inline css'
  }
}

storiesOf('Atom - VPlaceholder', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `<VPlaceholder />`
  }))
  .add('width', () => ({
    ...wrapper,
    template: `
      <VPlaceholder width="15rem" />`
  }))
  .add('height', () => ({
    ...wrapper,
    template: `
      <VPlaceholder height="1rem" />`
  }))
  .add('marginBottom', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder height="2rem" marginBottom="1rem" />
        <VPlaceholder height="2rem" />
      </div>
    `
  }))
