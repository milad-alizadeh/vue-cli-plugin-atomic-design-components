import { mount } from '@vue/test-utils'
import VLoader from '.'

describe('Atom - VLoader', () => {
  test('Should render correctly', () => {
    const wrapper = mount(VLoader)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().class).toContain('loader')
  })
})
