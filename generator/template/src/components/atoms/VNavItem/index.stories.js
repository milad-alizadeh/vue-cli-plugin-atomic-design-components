import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VNavItem from '.'

const wrapper = {
  components: { VNavItem },
  propsDescription: {
    list: 'An array of nav item objects. List format: { label: String, to: [String, Array], href: String }'
  }
}

storiesOf('Atom - VNavItem', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VNavItem to="/nav-item-1" @click="action">Sample Nav Item</VNavItem>'
  }))
