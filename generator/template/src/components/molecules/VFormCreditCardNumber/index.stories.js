import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormCreditCardNumber from '.'

const wrapper = {
  components: { VFormCreditCardNumber },
  propsDescription: {
    label: 'The label for all the options. Generally is a question',
    placeholder: 'Placeholder text for input',
    disabled: 'Whether this field is disabled',
    autocomplete: 'Autocomplete attribute used for browser autocomplete',
    name: 'name attribute for input',
    required: 'Whether this field is reuqired',
    errorMessages: 'The error messages shown if the input validation is failed',
    error: 'Whether input value is invalid',
    value: 'Value of the field'
  }
}

storiesOf('Molecule - VFormCreditCardNumber', module)
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
