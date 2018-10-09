import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VTableCell from '.'

const wrapper = {
  components: { VTableCell }
}

storiesOf('Atom - VTableCell', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: '<VTableCell>Table Cell Content</VTableCell>'
  }))
