import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VLabel from '.'

const wrapper = {
  components: { VLabel }
}

storiesOf('Atom - VLabel', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        Choose One of these options:
        <br/><br/>

        <VLabel>
          <input type="radio" v-model="option" value="1" />
          Option 1
        </VLabel>

        <VLabel>
          <input type="radio" v-model="option" value="2" />
          Option 2
        </VLabel>

        <VLabel>
          <input type="radio" v-model="option" value="3" />
          Option 3
        </VLabel>
      </div>
    `,
    data () {
      return {
        option: null
      }
    }
  }), { info: true })
  .add('htmlFor', () => ({
    ...wrapper,
    template: `
      <div>
        <VLabel htmlFor="text-input">Full Name</VLabel>
        <input type="text" id="text-input" />
      </div>
    `
  }), { info: true })
