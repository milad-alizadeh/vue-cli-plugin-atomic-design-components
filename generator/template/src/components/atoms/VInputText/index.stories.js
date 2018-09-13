import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VInputText from '.'

const wrapper = {
  components: { VInputText },
  propsDescription: {
    type: `Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password']`,
    disabled: 'Disables the input by adding "disabled" attribute',
    value: 'Value of the input',
    required: 'Adds the required attribute to input',
    placeholder: 'Placeholder text for the input',
    id: 'Id attribute for the input'
  }
}

storiesOf('Atom - VInputText', module)
  .addDecorator(VueInfoAddon)
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
  }))
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
  }))
