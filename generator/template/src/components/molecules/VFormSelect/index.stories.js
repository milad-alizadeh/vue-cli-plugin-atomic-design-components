import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormSelect from '.'

const wrapper = {
  components: { VFormSelect }
}

const options = [
  {
    label: 'Option A',
    value: 'a'
  },
  {
    label: 'Option B',
    value: 'b'
  },
  {
    label: 'Option C',
    value: 'c'
  },
  {
    label: 'Option D',
    value: 'd',
    disabled: true
  }
]

storiesOf('Molecule - VFormSelect', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormSelect
          label="Choose your country"
          emptyValueLabel="Please select a country"
          v-model="frieldValue"
          :options="options"
        />

        <br/><br/>

        Field value is: {{ frieldValue }}
      </div>
    `,
    data () {
      return {
        frieldValue: 'c',
        options
      }
    }
  }), { info: true })
  .add('invalid', () => ({
    ...wrapper,
    template: `
      <VFormSelect
        label="Choose your country"
        v-model="frieldValue"
        :options="options"
        error
        errorMessage="Please choose one of the options"
      />
    `,
    data () {
      return {
        frieldValue: '',
        options
      }
    }
  }), { info: true })
  .add('required', () => ({
    ...wrapper,
    template: `
      <VFormSelect
        label="Choose your country"
        v-model="frieldValue"
        :options="options"
        required
      />
    `,
    data () {
      return {
        frieldValue: '',
        options
      }
    }
  }), { info: true })
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VFormSelect
        label="Choose your country"
        disabled
        v-model="frieldValue"
        :options="options"
      />
    `,
    data () {
      return {
        frieldValue: '',
        options
      }
    }
  }), { info: true })
