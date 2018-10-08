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

  test('Add the correct css class', () => {
    const wrapper = mount(VCarouselSlide, {
      propsData: {
        backgroundColor: 'red'
      }
    })

    expect(wrapper.attributes().class).toContain('red')
  })
})
