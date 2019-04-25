import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputText from '.'

const wrapper = {
  components: { VInputText }
}

storiesOf('Atom - VInputText', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VInputText type="text" defaultValue="40" v-model="inputValue" />

        <br/><br/>
        Value is: {{ inputValue }}
      </div>
    `,
    data () {
      return {
        inputValue: 'Default Value'
      }
    }
  }), { info: true })
  .add('type', () => ({
    ...wrapper,
    template: `
      <div>
        <VInputText type="password" v-model="inputValue" />
      </div>
    `,
    data () {
      return {
        inputValue: ''
      }
    }
  }), { info: true })
