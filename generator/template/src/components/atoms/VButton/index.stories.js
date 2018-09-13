import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VButton from '.'

const wrapper = {
  components: { VButton },
  propsDescription: {
    success: 'Sucess mode',
    warning: 'Warning mode',
    error: 'Error mode',
    disabled: 'Disabled mode',
    to: '"to" prop for vue-router - renders a <router-link>',
    href: '"href" for link - renders an <a> component'
  }
}

storiesOf('Atom - VButton', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: '<VButton>Click here</VButton>'
  }))
  .add('success', () => ({
    ...wrapper,
    template: '<VButton success>Click here</VButton>'
  }))
  .add('error', () => ({
    ...wrapper,
    template: '<VButton error>Click here</VButton>'
  }))
  .add('warning', () => ({
    ...wrapper,
    template: '<VButton warning>Click here</VButton>'
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: '<VButton disabled>Click here</VButton>'
  }))
  .add('link', () => ({
    ...wrapper,
    template: '<VButton href="https://google.com">Click here</VButton>'
  }))
  .add('router-link', () => ({
    ...wrapper,
    template: `<VButton :to="{ name: 'Home' }">Click here</VButton>`
  }))
  .add('click event', () => ({
    ...wrapper,
    template: '<VButton @click="action">Click here</VButton>',
    methods: { action: action('button clicked') }
  }))
