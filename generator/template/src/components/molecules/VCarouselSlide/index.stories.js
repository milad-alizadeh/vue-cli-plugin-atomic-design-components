import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VCarouselSlide from '../VCarouselSlide'

const wrapper = {
  components: { VCarouselSlide },
  propsDescription: {}
}

storiesOf('Molecule - VCarouselSlide', module)
  .addDecorator(VueInfoAddon)
  .add('background', () => ({
    ...wrapper,
    template: `
      <VCarouselSlide backgroundColor="blue">
        Slide Content
      </VCarouselSlide>
    `
  }))
