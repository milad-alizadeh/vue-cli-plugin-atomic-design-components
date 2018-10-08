import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormTel from '.'

const wrapper = {
  components: { VFormTel },
  propsDescription: {
    label: 'Label text for the field',
    value: 'Value of the select',
    placeholder: 'Placeholder text for the input',
    errorMessages: 'The error messages shown if the input validation is failed',
    required: 'Whether the field is required',
    error: 'Whether select value is invalid',
    disabled: 'Disabled attribute for the select'
  }
}

storiesOf('Molecule - VFormTel', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormTel
          label="Phone Number"
          v-model="frieldValue"
          errorMessages="Please enter a valid phone number"
        />

        <br/><br/>

        <pre>Field value is: {{ frieldValue }}</pre>
      </div>
    `,
    data () {
      return {
        frieldValue: ''
      }
    }
  }))
