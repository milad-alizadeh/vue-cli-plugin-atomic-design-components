import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VLazyImage from '.'

const wrapper = {
  components: { VLazyImage },
  propsDescription: {
    src: 'Image src. Can be a url or local filename which loads from assets folder. All image urls are served through images.wi-5.com compression server.',
    alt: 'Image alt attribute',
    srcset: 'Image srcset attribute',
    sizes: 'Image sizes attribute',
    picture: 'Whether a picture tag should be rendered',
    sources: 'Sources for picture tag (if picture prop is set)',
    aspectRatio: 'Aspect ration of the image. Since the image dimension is unknown before it\'s loaded, we can specify the aspect ratio before the image loaded in order to make both placeholder and image the same height and avoid a div height jump. The aspect ratio is calculated by this formula. ascpectRatio = width / height. For a 800x600px image the aspect ratio would be 800/600 = 1.33'
  }
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
  }))
  .add('custom placeholder graphic', () => ({
    ...wrapper,
    template: `
      <VLazyImage
        src="example.jpg"
        placeholderGraphic="yosushi-logo"
        :aspectRatio="1.769"
      />
    `
  }))
