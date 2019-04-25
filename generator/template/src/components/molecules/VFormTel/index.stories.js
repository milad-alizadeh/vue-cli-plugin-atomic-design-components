import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormTel from '.'

const wrapper = {
  components: { VFormTel }
}

storiesOf('Molecule - VFormTel', module)
  .addDecorator(withInfo)
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
  }), { info: true })
