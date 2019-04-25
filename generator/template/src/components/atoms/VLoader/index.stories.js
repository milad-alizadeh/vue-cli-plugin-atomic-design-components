import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VLoader from '.'

const wrapper = {
  components: { VLoader },
  propsDescription: {
    size: `Size of the loader. Options ['small', 'medium', 'large']`
  }
}

storiesOf('Atom - VLoader', module)
  .addDecorator(withInfo)
  .add('small', () => ({
    ...wrapper,
    template: '<VLoader size="small"/>'
  }))
  .add('medium', () => ({
    ...wrapper,
    template: '<VLoader size="medium"/>'
  }))
  .add('large', () => ({
    ...wrapper,
    template: '<VLoader size="large"/>'
  }))
