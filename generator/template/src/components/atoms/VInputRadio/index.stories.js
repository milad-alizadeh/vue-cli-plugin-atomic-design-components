import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    value: 'Value of radio button.',
    checked: 'Whether the radio is checked. Can also be checked programatically using v-bind.',
    modelValue: 'This is a necessary prop for using v-model with this component. Should NOT be set',
    disabled: 'Disables the input by adding "disabled" attribute',
    required: 'Adds the required attribute to input',
    id: 'Id attribute for the input'
  }
}

storiesOf('Atom - VInputRadio', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <label>
          <VInputRadio v-model="selectedValue" value="option1" checked/>
          Options 1
        </label>

        <label>
          <VInputRadio v-model="selectedValue" value="option2" />
          Option 2
        </label>

        <label>
          <VInputRadio v-model="selectedValue" value="option3" />
          Option 3
        </label>

        <br/><br/>

        Value is : "{{ selectedValue }}"
      </div>
    `,
    data () {
      return {
        selectedValue: null
      }
    }
  }))
