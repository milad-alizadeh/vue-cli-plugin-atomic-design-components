import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormCreditCardNumber from '.'

const wrapper = {
  components: { VFormCreditCardNumber }
}

storiesOf('Molecule - VFormCreditCardNumber', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCreditCardNumber
          label="Credit card number"
          v-model="creditCard"
        />

        <br/><br/>
        <pre>Field value is: {{ creditCard }}</pre>
      </div>
    `,
    data () {
      return {
        creditCard: {
          number: '5253111111111111'
        }
      }
    }
  }), { info: true })
  .add('error', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCreditCardNumber
          label="Credit card number"
          v-model="creditCard"
          :error="true"
          errorMessages="Please enter a valid credit card number"
        />

        <br/><br/>

        Field value is: {{ creditCard }}
      </div>
    `,
    data () {
      return {
        creditCard: {
          number: '332312321312312'
        }
      }
    }
  }), { info: true })
