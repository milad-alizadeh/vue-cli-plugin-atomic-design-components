import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VIcon from '.'

const wrapper = {
  components: { VIcon }
}

storiesOf('Atom - VIcon', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VIcon name="twitter" />
        <VIcon name="linkedin" />
      </div>
    `
  }), { info: true })
  .add('color', () => ({
    ...wrapper,
    template: `
      <div>
        <VIcon name="twitter" color="red" />
        <VIcon name="twitter" color="black" />
      </div>
    `
  }), { info: true })
  .add('size', () => ({
    ...wrapper,
    template: `
    <div>
      <VIcon name="twitter" size="small" />
      <VIcon name="twitter" size="medium" />
      <VIcon name="twitter" size="large" />
    </div>
    `
  }), { info: true })
