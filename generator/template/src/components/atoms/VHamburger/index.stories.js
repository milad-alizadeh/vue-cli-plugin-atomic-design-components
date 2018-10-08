import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VHamburger from '.'

storiesOf('Atom - VHamburger', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { VHamburger },
    template: '<VHamburger :onClick="action" />',
    methods: {
      action: action('hamburger clicked')
    }
  }))
  .add('open', () => ({
    components: { VHamburger },
    template: '<VHamburger isOpen />'
  }))
