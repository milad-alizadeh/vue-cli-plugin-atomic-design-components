import { mount } from '@vue/test-utils'
import Heading from '.'

describe('Atom - Heading', () => {
  test('Renders the correct tag', () => {
    const wrapper = mount(Heading, {
      propsData: {
        level: 2
      }
    })

    expect(wrapper.contains('h2')).toBe(true)
  })

  test('Renders slots', () => {
    const wrapper = mount(Heading, {
      propsData: {
        level: 1
      },
      slots: {
        default: 'Heading title'
      }
    })

    expect(wrapper.text()).toBe('Heading title')
  })
})
