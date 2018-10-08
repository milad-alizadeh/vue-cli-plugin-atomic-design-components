import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormExpiryDate from '.'

const wrapper = {
  components: { VFormExpiryDate },
  propsDescription: {
    label: 'Label text for the field',
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

storiesOf('Molecule - VFormExpiryDate', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormExpiryDate
          label="Expiry Date"
          v-model="expiry"
        />

        <br/><br/>

        Field value is: {{ expiry }}
      </div>
    `,
    data () {
      return {
        expiry: '2222'
      }
    }
  }))
  .add('error', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormExpiryDate
          label="Expiry Date"
          v-model="expiry"
          :error="true"
          errorMessages="Please enter a valid expiry date"
        />

        <br/><br/>

        Field value is: {{ expiry }}
      </div>
    `,
    data () {
      return {
        expiry: ''
      }
    }
  }))
