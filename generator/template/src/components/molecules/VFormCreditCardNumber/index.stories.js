import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormCreditCardNumber from '.'

const wrapper = {
  components: { VFormCreditCardNumber }
}

storiesOf('Molecules - VFormCreditCardNumber', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCreditCardNumber
          label="Credit card number"
          v-model="creditCard"
        />

        <br/><br/>

        Field value is: {{ creditCard }}
      </div>
    `,
    data () {
      return {
        creditCard: {
          number: '5253111111111111'
        }
      }
    }
  }))
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
  }))
// {
//   name: 'creditCard',
//   component: 'VFormCreditCardNumber',
//   type: 'text',
//   label: {
//     creditCardNumber: 'Credit Card Number',
//     expiry: 'Expiry date',
//     cardHolder: 'Cardholder\'s Name'
//   }
// }
