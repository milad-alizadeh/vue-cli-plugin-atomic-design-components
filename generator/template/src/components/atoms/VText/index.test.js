import { mount } from '@vue/test-utils'
import VText from '.'

describe('Atom - VText', () => {
  test('Renders tag and classes based on props passed', () => {
    const wrapper = mount(VText)

    // With default props
    expect(wrapper.is('p')).toBe(true)
    expect(wrapper.attributes().class).toContain('small')
    expect(wrapper.attributes().class).toContain('normal')

    // With passed props
    wrapper.setProps({
      tag: 'span',
      weight: 'bold',
      size: 'large'
    })

    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.attributes().class).toContain('large')
    expect(wrapper.attributes().class).toContain('bold')
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
