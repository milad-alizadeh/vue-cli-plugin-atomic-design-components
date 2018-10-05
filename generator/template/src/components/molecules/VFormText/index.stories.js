import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormText from '.'

const wrapper = {
  components: { VFormText },
  propsDescription: {
    label: 'Label text for the field',
    type: `Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password']`,
    required: 'Whether the field is required',
    error: 'Whether input value is invalid',
    value: 'Value of the input',
    disabled: 'Disabled attribute for the input',
    errorMessage: 'The error message shown if the input validation is failed',
    placeholder: 'Placeholder text for the input',
    errorMessages: 'The error messages shown if the input validation is failed',
    name: 'name attribute for input',
    pattern: 'pattern attribute for input (used for mobile keypad)',
    autocomplete: 'Autocomplete attribute used for browser autocomplete',
    inputmode: 'inputmode attribute for input (used for mobile keypad)'
  }
}

storiesOf('Molecules - VFormText', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormText
          label="Full Name"
          placeholder="Please fill in your full name"
          type="text"
          v-model="frieldValue"
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
  .add('invalid', () => ({
    ...wrapper,
    template: `
      <VFormText
        label="Full Name"
        type="text"
        value="5673320"
        error
        errorMessage="Name can not include numbers"
      />
    `
  }))
  .add('required', () => ({
    ...wrapper,
    template: `
      <VFormText
        label="Full Name"
        type="text"
        required
      />
    `
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VFormText
        label="Full Name"
        type="text"
        disabled
      />
    `
  }))
