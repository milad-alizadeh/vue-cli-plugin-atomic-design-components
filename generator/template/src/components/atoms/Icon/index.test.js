import { shallowMount } from '@vue/test-utils'
import Icon from '.'

describe('Atom - Icon', () => {
  test('Renders the correct classes based on props passed', () => {
    const wrapper = shallowMount(Icon, {
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
