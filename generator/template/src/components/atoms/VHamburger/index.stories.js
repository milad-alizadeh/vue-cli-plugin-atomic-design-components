import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VHamburger from '.'

const wrapper = {
  components: { VHamburger },
  propsDescription: {
    isOpen: 'Whether the hamburger button is open'
  }
}

storiesOf('Atom - VHamburger', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VHamburger :onClick="action" />',
    methods: {
      action: action('hamburger clicked')
    }
  }))
  .add('open', () => ({
    ...wrapper,
    template: '<VHamburger isOpen />'
  }))
