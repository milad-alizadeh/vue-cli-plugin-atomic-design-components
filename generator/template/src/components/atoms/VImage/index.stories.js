import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VImage from '.'

const wrapper = {
  components: { VImage },
  propsDescription: {
    src: 'Image src. Can be a url or local filename which loads from assets folder. All image urls are served through images.wi-5.com compression server.',
    alt: 'Image alt attribute',
    srcset: 'Image srcset attribute',
    sizes: 'Image sizes attribute',
    picture: 'Whether a picture tag should be rendered',
    sources: 'Sources for picture tag (if picture prop is set)'
  }
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
  }))
  .add('url', () => ({
    ...wrapper,
    template: `
      <VImage
        src="https://source.unsplash.com/random/1000x800"
      />
    `
  }))
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
  }))
