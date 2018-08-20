import { mount } from '@vue/test-utils'
import VHeading from '.'

describe('Atom - VHeading', () => {
  test('Renders the correct tag', () => {
    const wrapper = mount(VHeading, {
      propsData: {
        level: 2
      }
    })

    expect(wrapper.contains('h2')).toBe(true)
  })

  test('Renders slots', () => {
    const wrapper = mount(VHeading, {
      propsData: {
        level: 1
      },
      slots: {
        default: 'VHeading title'
      }
    })

    expect(wrapper.text()).toBe('VHeading title')
  })
})
