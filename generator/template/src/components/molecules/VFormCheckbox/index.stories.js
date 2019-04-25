import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormCheckbox from '.'

const wrapper = {
  components: { VFormCheckbox }
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

storiesOf('Molecule - VFormCheckbox', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
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
  }), { info: true })
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
  }), { info: true })
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
  }), { info: true })
