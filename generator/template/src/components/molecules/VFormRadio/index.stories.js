import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormRadio from '.'

const wrapper = {
  components: { VFormRadio },
  propsDescription: {
    label: 'The label for all the options. Generally is a question',
    options: `An array of option objects. displayed as radio buttons. Option format is:
    {
      label: String,
      value: String,
      checked: Boolean,
      disabled: Boolean
    }
    `,
    disabled: 'Whether this field is disabled',
    required: 'Whether this field is reuqired',
    errorMessage: 'The error message shown if the input validation is failed',
    error: 'Whether input value is invalid',
    success: 'Whether input value is valid',
    value: 'Value of the field'
  }
}

const data = {
  selection: '',
  options: [
    {
      label: 'New York City',
      value: 'new-york'
    },
    {
      label: 'Paris - Disabled',
      value: 'paris',
      disabled: true
    },
    {
      label: 'London',
      value: 'london',
      checked: true
    },
    {
      label: 'Amsterdam',
      value: 'amsterdam'
    }
  ]
}

storiesOf('Molecules - VFormRadio', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormRadio
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          required
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
    data () {
      return data
    }
  }))
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormRadio
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          disabled
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
    data () {
      return data
    }
  }))
  .add('invalid', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormRadio
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          error
          errorMessage="Please select one of the available options"
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
    data () {
      return {
        selection: '',
        options: [
          {
            label: 'New York City',
            value: 'new-york'
          },
          {
            label: 'Paris',
            value: 'paris'
          },
          {
            label: 'London',
            value: 'london'
          }
        ]
      }
    }
  }))
  .add('valid', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormRadio
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          success
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
    data () {
      return data
    }
  }))
