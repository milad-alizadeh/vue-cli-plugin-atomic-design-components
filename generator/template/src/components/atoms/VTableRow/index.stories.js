import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VTableRow from '.'
import VTableCell from '../VTableCell'

const wrapper = {
  components: { VTableRow, VTableCell }
}

storiesOf('Atom - VTableRow', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <VTableRow>
        <VTableCell>Cell 1</VTableCell>
        <VTableCell>Cell 2</VTableCell>
      </VTableRow>
    `
  }), { info: true })
