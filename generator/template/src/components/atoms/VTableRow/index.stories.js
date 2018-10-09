import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VTableRow from '.'
import VTableCell from '../VTableCell'

const wrapper = {
  components: { VTableRow, VTableCell }
}

storiesOf('Atom - VTableRow', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <VTableRow>
        <VTableCell>Cell 1</VTableCell>
        <VTableCell>Cell 2</VTableCell>
      </VTableRow>
    `
  }))
