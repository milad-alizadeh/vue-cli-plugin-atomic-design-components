import { mount } from '@vue/test-utils'
import VText from '.'

describe('Atom - VText', () => {
  test('Renders tag and classes based on props passed', () => {
    const wrapper = mount(VText)

    // With default props
    expect(wrapper.is('p')).toBe(true)

    // With passed props
    wrapper.setProps({
      tag: 'span'
    })

    expect(wrapper.is('span')).toBe(true)
  })

  test('Renders slots', () => {
    const wrapper = mount(VText, {
      slots: {
        default: 'Text Sample'
      }
    })

    expect(wrapper.text()).toBe('Text Sample')
  })
})
