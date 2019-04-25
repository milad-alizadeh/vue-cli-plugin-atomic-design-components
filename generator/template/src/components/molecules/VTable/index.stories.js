import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VTable from '.'
import VTableRow from '../../atoms/VTableRow'
import VTableCell from '../../atoms/VTableCell'

const wrapper = {
  components: {
    VTable,
    VTableRow,
    VTableCell
  }
}

storiesOf('Molecule - VTable', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <VTable>
        <template slot="caption">How I chose to spend my money</template>

        <template slot="head">
          <VTableRow>
            <VTableCell heading>Purchase</VTableCell>
            <VTableCell heading>Location</VTableCell>
            <VTableCell heading>Date</VTableCell>
            <VTableCell heading>Evaluation</VTableCell>
            <VTableCell heading nowrap>Cost (£)</VTableCell>
          </VTableRow>
        </template>

        <template slot="body">
          <VTableRow>
            <VTableCell>Haircut</VTableCell>
            <VTableCell>Hairdresser</VTableCell>
            <VTableCell>12/09</VTableCell>
            <VTableCell>Great idea</VTableCell>
            <VTableCell>30</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Lasagna</VTableCell>
            <VTableCell>Restaurant</VTableCell>
            <VTableCell>12/09</VTableCell>
            <VTableCell>Regrets</VTableCell>
            <VTableCell>18</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Shoes</VTableCell>
            <VTableCell>Shoeshop</VTableCell>
            <VTableCell>13/09</VTableCell>
            <VTableCell>Big regrets</VTableCell>
            <VTableCell>65</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Toothpaste</VTableCell>
            <VTableCell>Supermarket</VTableCell>
            <VTableCell>13/09</VTableCell>
            <VTableCell>Good</VTableCell>
            <VTableCell>5</VTableCell>
          </VTableRow>
        </template>

        <template slot="foot">
          <VTableRow>
            <VTableCell colspan="4" textAlign="center" fontWeight="bold">SUM</VTableCell>
            <VTableCell>118</VTableCell>
          </VTableRow>
        </template>
      </VTable>
    `
  }), { info: true })
  .add('stickyHeader', () => ({
    ...wrapper,
    template: `
      <VTable stickyHeader :maxHeight="200">
        <template slot="head">
          <VTableRow>
            <VTableCell heading>Purchase</VTableCell>
            <VTableCell heading>Location</VTableCell>
            <VTableCell heading>Date</VTableCell>
            <VTableCell heading>Evaluation</VTableCell>
            <VTableCell heading nowrap>Cost (£)</VTableCell>
          </VTableRow>
        </template>

        <template slot="body">
          <VTableRow>
            <VTableCell>Haircut</VTableCell>
            <VTableCell>Hairdresser</VTableCell>
            <VTableCell>12/09</VTableCell>
            <VTableCell>Great idea</VTableCell>
            <VTableCell>30</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Lasagna</VTableCell>
            <VTableCell>Restaurant</VTableCell>
            <VTableCell>12/09</VTableCell>
            <VTableCell>Regrets</VTableCell>
            <VTableCell>18</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Shoes</VTableCell>
            <VTableCell>Shoeshop</VTableCell>
            <VTableCell>13/09</VTableCell>
            <VTableCell>Big regrets</VTableCell>
            <VTableCell>65</VTableCell>
          </VTableRow>

          <VTableRow>
            <VTableCell>Toothpaste</VTableCell>
            <VTableCell>Supermarket</VTableCell>
            <VTableCell>13/09</VTableCell>
            <VTableCell>Good</VTableCell>
            <VTableCell>5</VTableCell>
          </VTableRow>
        </template>

        <template slot="foot">
          <VTableRow>
            <VTableCell colspan="4" textAlign="center" fontWeight="bold">SUM</VTableCell>
            <VTableCell>118</VTableCell>
          </VTableRow>
        </template>
      </VTable>
    `
  }), { info: true })
