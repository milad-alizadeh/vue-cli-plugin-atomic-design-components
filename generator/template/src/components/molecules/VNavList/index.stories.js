import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VNavList from '.'

let list = [
  {
    label: 'Home',
    to: '/home'
  }, {
    label: 'About',
    to: '/about'
  }
]

const wrapper = {
  components: { VNavList },
  propsDescription: {
    list: 'An array of nav item objects. List format: { label: String, to: [String, Array], href: String }'
  }
}

storiesOf('Molecule - VNavList', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VNavList :list="list" />',
    data () {
      return {
        list
      }
    }
  }))
