import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VLoader from '.'

const wrapper = {
  components: { VLoader }
}

storiesOf('Atom - VLoader', module)
  .addDecorator(withInfo)
  .add('small', () => ({
    ...wrapper,
    template: '<VLoader size="small"/>'
  }), { info: true })
  .add('medium', () => ({
    ...wrapper,
    template: '<VLoader size="medium"/>'
  }), { info: true })
  .add('large', () => ({
    ...wrapper,
    template: '<VLoader size="large"/>'
  }), { info: true })
