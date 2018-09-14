import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VFormExpiryDate from '.'

const wrapper = {
  components: { VFormExpiryDate }
}

storiesOf('Molecules - VFormExpiryDate', module)
  .addDecorator(VueInfoAddon)
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
        expiry: ''
      }
    }
  }))
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
  }))
