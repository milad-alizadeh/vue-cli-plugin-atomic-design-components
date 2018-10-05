import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormCheckbox from '.'

const wrapper = {
  components: { VFormCheckbox },
  propsDescription: {
    label: 'The label for all the options. Generally is a question',
    options: `An array of option objects. displayed as chekcboxes. A single option format is:
    {
      label: String,
      value: String,
      disabled: Boolean
    }
    `,
    disabled: 'Whether this field is disabled',
    required: 'Whether this field is reuqired',
    name: 'name attribute for input',
    errorMessages: 'The error messages shown if the input validation is failed',
    error: 'Whether input value is invalid',
    value: 'Value of the field',
    checked: 'Used to check the input by default. Works only on single checkboxes'
  }
}

const data = {
  selection: ['new-york', 'london'],
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
      value: 'london'
    },
    {
      label: 'Amsterdam',
      value: 'amsterdam'
    }
  ]
}

storiesOf('Molecules - VFormCheckbox', module)
  .addDecorator(VueInfoAddon)
  .add('single', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCheckbox
          label="Do you accept our terms & conditions?"
          v-model="selection"
          required
          checked
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
    data () {
      return {
        selection: false
      }
    }
  }))
  .add('single - disabled', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCheckbox
          label="Do you accept our terms & conditions?"
          v-model="selection"
          disabled
        />
      </div>
    `,
    data () {
      return {
        selection: false
      }
    }
  }))
  .add('multiple', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCheckbox
          label="Choose some of your favourite cities"
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
        <VFormCheckbox
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          disabled
        />
      </div>
    `,
    data () {
      return {
        ...data,
        selection: []
      }
    }
  }))
  .add('invalid', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormCheckbox
          label="What's your favourite city?"
          :options="options"
          v-model="selection"
          error
          errorMessage="Please select one of the available options"
        />
      </div>
    `,
    data () {
      return data
    }
  }))
