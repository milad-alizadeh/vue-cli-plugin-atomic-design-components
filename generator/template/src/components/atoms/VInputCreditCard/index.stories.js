import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputCreditCard from '.'

const wrapper = {
  components: { VInputCreditCard }
}

storiesOf('Atom - VInputCreditCard', module)
  .addDecorator(withInfo)
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
  }), { info: true })
  .add('disabled', () => ({
    ...wrapper,
    template: `
      <VInputCreditCard disabled v-model="creditCard" />
    `,
    data () {
      return {
        creditCard: {
          number: '4111111111111111',
          type: ''
        }
      }
    }
  }), { info: true })
