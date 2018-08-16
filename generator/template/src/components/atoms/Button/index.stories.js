import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import Button from '.'

const wrapper = {
  components: { Button },
  propsDescription: {
    success: 'Sucess mode',
    warning: 'Warning mode',
    error: 'Error mode',
    disabled: 'Disabled mode',
    to: '"to" prop for vue-router - renders a <router-link>',
    href: '"href" for link - renders an <a> component'
  }
}

storiesOf('Atom - Button', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: '<Button>Click here</Button>'
  }))
  .add('success', () => ({
    ...wrapper,
    template: '<Button success>Click here</Button>'
  }))
  .add('error', () => ({
    ...wrapper,
    template: '<Button error>Click here</Button>'
  }))
  .add('warning', () => ({
    ...wrapper,
    template: '<Button warning>Click here</Button>'
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: '<Button disabled>Click here</Button>'
  }))
  .add('link', () => ({
    ...wrapper,
    template: '<Button href="https://google.com">Click here</Button>'
  }))
  .add('router-link', () => ({
    ...wrapper,
    template: `<Button :to="{ name: 'Home' }">Click here</Button>`
  }))
  .add('click event', () => ({
    ...wrapper,
    template: '<Button @click="action">Click here</Button>',
    methods: { action: action('button clicked') }
  }))
