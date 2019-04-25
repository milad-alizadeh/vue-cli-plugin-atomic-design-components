import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VTableCell from '.'

const wrapper = {
  components: { VTableCell }
}

storiesOf('Atom - VTableCell', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VTableCell>Table Cell Content</VTableCell>'
  }))
