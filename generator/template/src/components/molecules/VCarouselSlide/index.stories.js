import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VCarouselSlide from '../VCarouselSlide'

const wrapper = {
  components: { VCarouselSlide }
}

storiesOf('Molecule - VCarouselSlide', module)
  .addDecorator(withInfo)
  .add('background', () => ({
    ...wrapper,
    template: `
      <VCarouselSlide backgroundColor="blue">
        Slide Content
      </VCarouselSlide>
    `
  }), { info: true })
