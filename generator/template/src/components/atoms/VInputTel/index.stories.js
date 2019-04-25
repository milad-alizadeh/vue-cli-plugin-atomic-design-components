import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputTel from '.'

const wrapper = {
  components: { VInputTel },
  propsDescription: {
    preferredCountries: 'An array of prefered countries to show at the top of dropdown',
    value: 'The value of tel input'
  }
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
  }))
