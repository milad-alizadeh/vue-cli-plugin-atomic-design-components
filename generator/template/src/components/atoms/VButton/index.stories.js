import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VButton from '.'

const wrapper = {
  components: { VButton }
}

storiesOf('Atom - VButton', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VButton>Click here</VButton>'
  }), { info: true })
  .add('success', () => ({
    ...wrapper,
    template: '<VButton success>Click here</VButton>'
  }), { info: true })
  .add('error', () => ({
    ...wrapper,
    template: '<VButton error>Click here</VButton>'
  }), { info: true })
  .add('warning', () => ({
    ...wrapper,
    template: '<VButton warning>Click here</VButton>'
  }), { info: true })
  .add('disabled', () => ({
    ...wrapper,
    template: '<VButton disabled>Click here</VButton>'
  }), { info: true })
  .add('link', () => ({
    ...wrapper,
    template: '<VButton href="https://google.com">Click here</VButton>'
  }), { info: true })
  .add('router-link', () => ({
    ...wrapper,
    template: `<VButton :to="{ name: 'Home' }">Click here</VButton>`
  }), { info: true })
  .add('click event', () => ({
    ...wrapper,
    template: '<VButton @click="action">Click here</VButton>',
    methods: { action: action('button clicked') }
  }), { info: true })
