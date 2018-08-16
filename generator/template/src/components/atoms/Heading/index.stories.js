import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Heading from '.'

const wrapper = {
  components: { Heading },
  propsDescription: {
    level: `Heading level. Options[1, 2, 3, 4, 5, 6]. For example '1' will result in a <h1> tag`
  }
}

storiesOf('Atom - Heading', module)
  .addDecorator(VueInfoAddon)
  .add('level', () => ({
    ...wrapper,
    template: `<Heading :level="1">Heading 1</Heading>`
  }))
