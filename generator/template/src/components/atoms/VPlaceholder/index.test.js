import { mount } from '@vue/test-utils'
import VPlaceholder from '.'

describe('Atom - VPlaceholder', () => {
  test('renders correctly with the right ', () => {
    const wrapper = mount(VPlaceholder, {
      propsData: {
        width: '60%',
        height: '10px',
        marginBottom: '10px'
      }
    })

    expect(wrapper.attributes().style).toContain('width: 60%')
    expect(wrapper.attributes().style).toContain('height: 10px')
    expect(wrapper.attributes().style).toContain('margin-bottom: 10px')
  })
})
