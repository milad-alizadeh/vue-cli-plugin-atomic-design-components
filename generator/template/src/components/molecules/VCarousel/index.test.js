import { mount } from '@vue/test-utils'
import VCarousel from '.'
import VCarouselSlide from '../VCarouselSlide'

describe('Molecule - VCarousel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VCarousel, {
      data () {
        return {
          currentSlide: 0
        }
      },
      slots: {
        default: `
          <VCarouselSlide>Slide 1 Content</VCarouselSlide>
          <VCarouselSlide>Slide 2 Content</VCarouselSlide>
          <VCarouselSlide>Slide 3 Content</VCarouselSlide>
        `
      },
      stubs: {
        VCarouselSlide,
        VIcon: {
          template: '<span class="icon"></span>'
        }
      }
    })
  })

  test('Do not shows previous navigation arrow on the first slide', () => {
    expect(wrapper.find('.v-m-carousel__control--prev .icon').exists()).toBe(false)
  })

  test('Do not shows next navigation arrow on the last slide', () => {
    wrapper.setData({ currentSlide: 2 })
    expect(wrapper.find('.v-m-carousel__control--next .icon').exists()).toBe(false)
  })

  test('Shows dotted navigation matching the number of slides', () => {
    expect(wrapper.find('.v-m-carousel__dotted-nav').exists()).toBe(true)
    expect(wrapper.findAll('.v-m-carousel__dot').length).toBe(3)
  })

  test('Changes the slide when clicking on dotted navigation', () => {
    wrapper.findAll('.v-m-carousel__dot').at(2).trigger('click')
    expect(wrapper.vm.currentSlide).toBe(2)
  })

  test('Change the slide when clicking on arrow navigation', () => {
    wrapper.find('.v-m-carousel__control--next').trigger('click')
    expect(wrapper.vm.currentSlide).toBe(1)
    wrapper.find('.v-m-carousel__control--prev').trigger('click')
    expect(wrapper.vm.currentSlide).toBe(0)
  })
})
