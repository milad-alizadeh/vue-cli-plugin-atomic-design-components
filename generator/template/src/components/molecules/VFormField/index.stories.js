import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    label: 'Label text for the field',
    type: `Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password']`,
    required: 'Whether the field is required',
    error: 'Whether the input value is invalid',
    success: 'Whether the input value is valid',
    value: 'Value of the input',
    disabled: 'Disabled attribute for the input',
    errorMessage: 'The error message shown if the input validation is failed',
    placeholder: 'Placeholder text for the input'
  }
}

storiesOf('Molecules - VFormField', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormField
          label="Full Name"
          placeholder="Please fill in your full name"
          type="text"
          v-model="frieldValue"
        />

        <br/><br/>

        Field value is: {{ frieldValue }}
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
      <VFormField
        label="Full Name"
        type="text"
        value="5673320"
        error
        errorMessage="Name can not include numbers"
      />
    `
  }))
  .add('valid', () => ({
    ...wrapper,
    template: `
      <VFormField
        label="Full Name"
        type="text"
        value="John Doe"
        success
      />
    `
  }))
  .add('required', () => ({
    ...wrapper,
    template: `
      <VFormField
        label="Full Name"
        type="text"
        required
      />
    `
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VFormField
        label="Full Name"
        type="text"
        disabled
      />
    `
  }))
