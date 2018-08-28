import { mount } from '@vue/test-utils'
import VLabel from '.'

describe('Atom - VLabel', () => {
  test('Renders correctly', () => {
    const wrapper = mount(VLabel, {
      propsData: {
        forAttribute: 'text-input'
      },
      slots: {
        default: 'Full Name'
      }
    })

    const label = wrapper.find('label')

    expect(label.attributes().for).toBe('text-input')
    expect(label.text()).toBe('Full Name')
  })

  test('Has correct classes based on paassed props', () => {
    const wrapper = mount(VLabel, {
      propsData: {
        error: true,
        success: true
      }
    })

    const cssClass = wrapper.attributes().class

    expect(cssClass).toContain('error')
    expect(cssClass).toContain('success')
  })

  test('renders a * if the label is required', () => {
    const wrapper = mount(VLabel, {
      propsData: {
        required: true
      },
      slots: {
        default: 'Full Name'
      }
    })

    expect(wrapper.html()).toContain('* Full Name')
  })
})
