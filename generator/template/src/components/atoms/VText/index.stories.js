import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VText from '.'

const wrapper = {
  components: { VText }
}

storiesOf('Atom - VText', module)
  .addDecorator(withInfo)
  .add('size', () => ({
    ...wrapper,
    template: `
      <div>
        <VText size="x-large">Sample text x-large</VText>
        <VText size="large">Sample text large</VText>
        <VText size="medium">Sample text medium</VText>
        <VText size="small">Sample text small</VText>
        <VText size="x-small">Sample text x-small</VText>
      </div>
    `
  }), { info: true })
  .add('weight', () => ({
    ...wrapper,
    template: '<VText weight="bold">Sample bold text</VText>'
  }), { info: true })
  .add('tag', () => ({
    ...wrapper,
    template: `<VText tag="span">Sample text with '&#x3C;span&#x3E;' tag</VText>`
  }), { info: true })
