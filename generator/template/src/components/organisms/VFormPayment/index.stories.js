import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormPayment from '.'

const wrapper = {
  components: { VFormPayment }
}

storiesOf('Organism - VFormPayment', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormPayment
          label="Credit card number"
          v-model="paymentData"
          :label="label"
        />

        <br/><br/>
        <pre>Field value is: {{ paymentData }}</pre>
      </div>
    `,
    data () {
      return {
        paymentData: {
          creditCard: {
            number: ''
          },
          cardHolder: '',
          securityCode: '',
          expiry: ''
        },
        label: {
          securityCode: 'Security Code',
          creditCardNumber: 'Credit Card Number',
          expiry: 'Expiry date',
          cardHolder: 'Cardholder\'s Name'
        }
      }
    }
  }))
