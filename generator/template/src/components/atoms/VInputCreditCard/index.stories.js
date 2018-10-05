import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VInputCreditCard from '.'

const wrapper = {
  components: { VInputCreditCard },
  propsDescription: {
    required: 'Adds the required attribute to input',
    disabled: 'Disables the input by adding "disabled" attribute',
    autocomplete: 'Autocomplete attribute used for browser autocomplete',
    value: 'Value of credit card field',
    id: 'Id attribute for the input',
    name: 'name attribute for credit card input',
    placeholder: 'Placeholder text for the input'
  }
}

storiesOf('Atom - VInputCreditCard', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VInputCreditCard v-model="creditCard"/>

        <br/><br/>
        <pre> Value is: {{ creditCard }} </pre>
      </div>
    `,
    data () {
      return {
        creditCard: {
          number: '4111111111111111',
          type: ''
        }
      }
    }
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VInputCreditCard disabled v-model="creditCard" />
    `,
    data () {
      return {
        creditCard: {
          number: '4111111111111111',
          type: ''
        }
      }
    }
  }))
