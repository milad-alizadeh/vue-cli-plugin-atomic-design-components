import { mount } from '@vue/test-utils'
import VPlaceholder from '.'

describe('Atom - VPlaceholder', () => {
  test('calculatas the correct viebox based on type', () => {
    const wrapper = mount(VPlaceholder, {
      propsData: {
        type: 'text',
        lines: 3
      }
    })

    expect(wrapper.find('svg').attributes().viewBox).toBe('0 0 400 60')

    wrapper.setProps({ lines: 4 })

    expect(wrapper.find('svg').attributes().viewBox).toBe('0 0 400 85')
  })
})
