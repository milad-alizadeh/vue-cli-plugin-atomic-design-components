import { mount } from '@vue/test-utils'
import VIcon from '.'

describe('Atom - VIcon', () => {
  test('Renders the correct classes based on props passed', () => {
    const wrapper = mount(VIcon, {
      propsData: {
        name: 'linkedin',
        size: 'large',
        color: 'red'
      }
    })

    expect(wrapper.attributes().class).toContain('large')
    expect(wrapper.attributes().class).toContain('red')
  })
})
