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
    template: `
      <div>
        <VIcon name="twitter" color="red" />
        <VIcon name="twitter" color="black" />
      </div>
    `
  }))
  .add('size', () => ({
    ...wrapper,
    template: `
    <div>
      <VIcon name="twitter" size="small" />
      <VIcon name="twitter" size="medium" />
      <VIcon name="twitter" size="large" />
    </div>
    `
  }))
