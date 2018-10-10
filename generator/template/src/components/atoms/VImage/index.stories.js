import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VImage from '.'

const wrapper = {
  components: { VImage },
  propsDescription: {
    src: 'Image src',
    alt: 'Image alt attribute',
    picture: 'Whether a picture tag should be rendered',
    sources: 'Sources for picture tag (if picture prop is set)'
  }
}

storiesOf('Atom - VImage', module)
  .addDecorator(VueInfoAddon)
  .add('url', () => ({
    ...wrapper,
    template: `
      <VImage
        src="https://source.unsplash.com/random/1000x800"
      />
    `
  }))
  .add('picture', () => ({
    ...wrapper,
    template: `
      <VImage
        src="https://source.unsplash.com/random/1000x800"
        picture
      />
    `
  }))
