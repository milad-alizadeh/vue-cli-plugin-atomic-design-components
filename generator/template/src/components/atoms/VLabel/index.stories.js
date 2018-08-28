import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    for: '"for" attribute for label'
  }
}

storiesOf('Atom - VLabel', module)
  .addDecorator(VueInfoAddon)
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
  }))
  .add('forAttribute', () => ({
    ...wrapper,
    template: `
      <div>
        Choose One of these
        <br/><br/>

        <VLabel forAttribute="text-input">Full Name</VLabel>
        <VInputText id="text-input" />
      </div>
    `
  }))
