import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VInputCheckbox from '.'

const wrapper = {
  components: { VInputCheckbox },
  propsDescription: {
    value: 'Value of radio button.',
    checked: 'Whether the radio is checked. Can also be checked programatically using v-bind.',
    modelValue: 'This is a necessary prop for using v-model with this component. Should NOT be set',
    disabled: 'Disables the input by adding "disabled" attribute',
    required: 'Adds the required attribute to input',
    trueValue: 'The returned value if the checkbox is single and checked. for example "1" instead of true',
    falseValue: 'The returned value if If the checkbox is single and NOT checked. for example "0" instead of false',
    id: 'Id attribute for the input',
    name: 'name attribute for input'
  }
}

storiesOf('Atom - VInputCheckbox', module)
  .addDecorator(VueInfoAddon)
  .add('single', () => ({
    ...wrapper,
    template: `
      <div>
        <label>
          <VInputCheckbox v-model="selectedValue" checked/>
          Do you accept the terms and conditions?
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
  .add('multiple options', () => ({
    ...wrapper,
    template: `
      <div>
        <label>
          <VInputCheckbox v-model="selectedValue" value="option1" />
          Options 1
        </label>

        <label>
          <VInputCheckbox v-model="selectedValue" value="option2" />
          Option 2
        </label>

        <label>
          <VInputCheckbox v-model="selectedValue" value="option3" />
          Option 3
        </label>

        <br/><br/>

        Value is : "{{ selectedValue }}"
      </div>
    `,
    data () {
      return {
        selectedValue: ['option1', 'option3']
      }
    }
  }))
