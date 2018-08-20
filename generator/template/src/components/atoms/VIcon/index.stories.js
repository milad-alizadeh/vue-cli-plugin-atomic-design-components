import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    name: `Icon name. This is the svg filename located in 'atoms/Icon/icons' without .svg extension`,
    color: `Icon color`,
    size: `Icon size. Options: ['small', 'medium', 'large']`
  }
}

storiesOf('Atom - VIcon', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VIcon name="twitter" />
        <VIcon name="linkedin" />
      </div>
    `
  }))
  .add('color', () => ({
    ...wrapper,
    template: '<VIcon name="twitter" color="red" />'
  }))
  .add('size', () => ({
    ...wrapper,
    template: '<VIcon name="twitter" size="large" />'
  }))
