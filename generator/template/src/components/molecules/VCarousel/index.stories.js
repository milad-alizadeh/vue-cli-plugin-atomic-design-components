import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VCarousel from '.'
import VCarouselSlide from '../VCarouselSlide'

const wrapper = {
  components: { VCarousel, VCarouselSlide }
}

storiesOf('Molecule - VCarousel', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
  .add('no dotted navigation', () => ({
    ...wrapper,
    template: `
      <VCarousel :dottedNav="false">
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
  }), { info: true })
  .add('no arrow navigation', () => ({
    ...wrapper,
    template: `
      <VCarousel :arrowNavigation="false">
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
  }), { info: true })
