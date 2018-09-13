import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormTel from '.'

const wrapper = {
  components: { VFormTel }
}

storiesOf('Molecules - VFormTel', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormTel
          label="Full Name"
          v-model="frieldValue"
          errorMessages="Please enter a valid phone number"
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
