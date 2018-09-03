import { mount } from '@vue/test-utils'
import VLabel from '.'

describe('Atom - VLabel', () => {
  test('Renders correctly', () => {
    const wrapper = mount(VLabel, {
      propsData: {
        htmlFor: 'text-input'
      },
      slots: {
        default: 'Full Name'
      }
    })

    const label = wrapper.find('label')

    expect(label.attributes().for).toBe('text-input')
    expect(label.text()).toBe('Full Name')
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
