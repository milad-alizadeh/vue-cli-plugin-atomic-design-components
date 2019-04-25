import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VInputRadio from '.'

const wrapper = {
  components: { VInputRadio }
}

storiesOf('Atom - VInputRadio', module)
  .addDecorator(withInfo)
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
  }), { info: true })
