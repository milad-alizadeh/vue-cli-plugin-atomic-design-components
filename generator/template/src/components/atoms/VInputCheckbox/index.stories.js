import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputCheckbox from '.'

const wrapper = {
  components: { VInputCheckbox }
}

storiesOf('Atom - VInputCheckbox', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
