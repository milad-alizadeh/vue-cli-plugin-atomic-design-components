import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VAccordion from '.'

const wrapper = {
  components: { VAccordion },
  propsDescription: {
    items: 'An array of accordion items. Array item format is { title: String, content: String }'
  }
}

const items = [
  {
    title: 'Title 1',
    content: 'Content 1'
  },
  {
    title: 'Title 2',
    content: 'Content 2'
  },
  {
    title: 'Title 3',
    content: 'Content 3'
  },
  {
    title: 'Title 5',
    content: '<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>'
  }
]

storiesOf('Molecule - VAccordion', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `<VAccordion :items="items"/>`,
    data () {
      return {
        items
      }
    }
  }))
