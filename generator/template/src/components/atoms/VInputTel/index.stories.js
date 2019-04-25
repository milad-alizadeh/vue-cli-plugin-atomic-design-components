import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputTel from '.'

const wrapper = {
  components: { VInputTel }
}

storiesOf('Atom - VInputTel', module)
  .addDecorator(withInfo)
  .add('single', () => ({
    ...wrapper,
    template: `
      <div>
        <VInputTel v-model="phoneNumber" />

        <pre>{{ phoneNumber }}</pre>

      </div>
    `,
    data () {
      return {
        phoneNumber: {
          number: '+447792916879'
        }
      }
    }
  }), { info: true })
