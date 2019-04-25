import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VImage from '.'

const wrapper = {
  components: { VImage }
}

storiesOf('Atom - VImage', module)
  .addDecorator(withInfo)
  .add('local image', () => ({
    ...wrapper,
    template: `
      <VImage
        src="logo.png"
        alt="Vue Logo"
      />
    `
  }), { info: true })
  .add('url', () => ({
    ...wrapper,
    template: `
      <VImage
        src="https://source.unsplash.com/random/1000x800"
      />
    `
  }), { info: true })
  .add('picture tag', () => ({
    ...wrapper,
    template: `
      <VImage
        src="logo.png"
        :sources="[
          {
            srcset: 'logo-mono.png',
            media: '(max-width: 400px)'
          }
        ]"
        picture
      />
    `
  }), { info: true })
