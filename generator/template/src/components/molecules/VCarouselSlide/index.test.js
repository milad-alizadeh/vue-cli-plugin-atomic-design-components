import { mount } from '@vue/test-utils'
import VCarouselSlide from '.'

describe('Molecule - VCarouselSlide', () => {
  test('Renders the slots correctly', () => {
    const wrapper = mount(VCarouselSlide, {
      slots: {
        default: 'Slide Content'
      }
    })

    expect(wrapper.html()).toContain('Slide Content')
  })
})
