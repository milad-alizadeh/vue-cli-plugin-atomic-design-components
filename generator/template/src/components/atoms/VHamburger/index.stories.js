import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VHamburger from '.'

const wrapper = {
  components: { VHamburger }
}

storiesOf('Atom - VHamburger', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VHamburger :onClick="action" />',
    methods: {
      action: action('hamburger clicked')
    }
  }), { info: true })
  .add('open', () => ({
    ...wrapper,
    template: '<VHamburger isOpen />'
  }), { info: true })
