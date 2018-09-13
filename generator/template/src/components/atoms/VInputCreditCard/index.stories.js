import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VInputCreditCard from '.'

const wrapper = {
  components: { VInputCreditCard }
}

storiesOf('Atom - VInputCreditCard', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VInputCreditCard v-model="creditCard"/>

        <br/><br/>
        <pre> Value is: {{ creditCard }} </pre>
      </div>
    `,
    data () {
      return {
        creditCard: {
          number: '4111111111111111',
          type: ''
        }
      }
    }
  }))
