import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VCarousel from '.'
import VCarouselSlide from '../VCarouselSlide'

const wrapper = {
  components: { VCarousel, VCarouselSlide },
  propsDescription: {
    loop: 'If the carousel should loop once it\'s finished'
  }
}

storiesOf('Molecules - VCarousel', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    ...wrapper,
    template: `
      <VCarousel>
        <VCarouselSlide backgroundColor="blue">
          Slide 1
        </VCarouselSlide>
        <VCarouselSlide backgroundColor="red">
          Slide 2
        </VCarouselSlide>
        <VCarouselSlide backgroundColor="gold">
          Slide 3
        </VCarouselSlide>
      </VCarousel>
    `
  }))
  .add('loop', () => ({
    ...wrapper,
    template: `
      <VCarousel loop>
        <VCarouselSlide backgroundColor="blue">
          Slide 1
        </VCarouselSlide>
        <VCarouselSlide backgroundColor="red">
          Slide 2
        </VCarouselSlide>
        <VCarouselSlide backgroundColor="gold">
          Slide 3
        </VCarouselSlide>
      </VCarousel>
    `
  }))
