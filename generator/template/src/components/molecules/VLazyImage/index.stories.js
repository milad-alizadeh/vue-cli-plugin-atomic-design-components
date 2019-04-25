import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VLazyImage from '.'

const wrapper = {
  components: { VLazyImage }
}

storiesOf('Molecule - VLazyImage', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <VLazyImage
        src="example.jpg"
        :aspectRatio="1.769"
      />
    `
  }), { info: true })
  .add('custom placeholder graphic', () => ({
    ...wrapper,
    template: `
      <VLazyImage
        src="example.jpg"
        placeholderGraphic="yosushi-logo"
        :aspectRatio="1.769"
      />
    `
  }), { info: true })
