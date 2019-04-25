import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormRadio from '.'

const wrapper = {
  components: { VFormRadio }
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

storiesOf('Molecule - VFormRadio', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
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
  }), { info: true })
