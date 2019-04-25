import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormText from '.'

const wrapper = {
  components: { VFormText }
}

storiesOf('Molecule - VFormText', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
  .add('required', () => ({
    ...wrapper,
    template: `
      <VFormText
        label="Full Name"
        type="text"
        required
      />
    `
  }), { info: true })
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VFormText
        label="Full Name"
        type="text"
        disabled
      />
    `
  }), { info: true })
