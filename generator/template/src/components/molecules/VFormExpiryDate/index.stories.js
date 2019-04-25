import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VFormExpiryDate from '.'

const wrapper = {
  components: { VFormExpiryDate }
}

storiesOf('Molecule - VFormExpiryDate', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormExpiryDate
          label="Expiry Date"
          v-model="expiry"
        />

        <br/><br/>

        Field value is: {{ expiry }}
      </div>
    `,
    data () {
      return {
        expiry: '2222'
      }
    }
  }), { info: true })
  .add('error', () => ({
    ...wrapper,
    template: `
      <div>
        <VFormExpiryDate
          label="Expiry Date"
          v-model="expiry"
          :error="true"
          errorMessages="Please enter a valid expiry date"
        />

        <br/><br/>

        Field value is: {{ expiry }}
      </div>
    `,
    data () {
      return {
        expiry: ''
      }
    }
  }), { info: true })
