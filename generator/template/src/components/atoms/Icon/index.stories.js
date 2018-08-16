import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Icon from '.'

const wrapper = {
  components: { Icon },
  propsDescription: {
    name: `Icon name. This is the svg filename without .svg extension. ie 'twitter'`,
    color: `Icon color`,
    size: `Icon size. Options: ['small', 'medium', 'large']`
  }
}

storiesOf('Atom - Icon', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <Icon name="twitter" />
        <Icon name="linkedin" />
      </div>
    `
  }))
  .add('color', () => ({
    ...wrapper,
    template: '<Icon name="twitter" color="red" />'
  }))
  .add('size', () => ({
    ...wrapper,
    template: '<Icon name="twitter" size="large" />'
  }))
