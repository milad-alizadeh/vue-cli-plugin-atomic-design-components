import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormPayment from '.'

const wrapper = {
  components: { VFormPayment }
}

storiesOf('Molecules - VFormPayment', module)
  .addDecorator(VueInfoAddon)
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
    mounted () {
      // setTimeout(() => {
      //   this.paymentData = {
      //     creditCard: {
      //       number: '4111 1111 1111 1111'
      //     },
      //     cardHolder: 'Glenn Stuff',
      //     securityCode: '313',
      //     expiry: '11/18'
      //   }
      // }, 2000)
    },
    data () {
      return {
        paymentData: {
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
