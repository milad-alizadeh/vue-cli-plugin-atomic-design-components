import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VHeader from '.'

let list = [
  {
    label: 'Home',
    to: '/home'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'External Link',
    href: 'https://google.com'
  }
]

const wrapper = {
  components: { VHeader },
  propsDescription: {
    navList: 'An array of nav item objects. List format: { label: String, to: [String, Array], href: String }'
  }
}

storiesOf('Organism - VHeader', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: '<VHeader :navList="list"/>',
    data () {
      return {
        list
      }
    }
  }))
