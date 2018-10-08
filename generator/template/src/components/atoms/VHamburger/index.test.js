import { shallowMount } from '@vue/test-utils'
import Hamburger from '.'

describe('Atom - Hamburger', () => {
  test('renders correctly with the right props', () => {
    const wrapper = shallowMount(Hamburger, {
      propsData: {
        isOpen: true
      }
    })

    expect(wrapper.attributes().class).toContain('open')
  })
})
