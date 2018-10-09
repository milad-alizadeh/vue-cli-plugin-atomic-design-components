import { mount } from '@vue/test-utils'
import VTableCell from '.'

describe('Atom - VTableCell', () => {
  test('renders the slot correctly', () => {
    const wrapper = mount(VTableCell, {
      slots: {
        default: 'Cell Content'
      }
    })

    expect(wrapper.html()).toContain('Cell Content')
  })

  test('renders the correct tag', () => {
    const wrapper = mount(VTableCell)

    expect(wrapper.is('td')).toBe(true)

    wrapper.setProps({ heading: true })

    expect(wrapper.is('th')).toBe(true)
  })

  test('renders the correct css classes', () => {
    const wrapper = mount(VTableCell, {
      propsData: {
        nowrap: true,
        heading: true,
        textAlign: 'right'
      }
    })

    let cssClass = wrapper.attributes().class

    expect(cssClass).toContain('nowrap')
    expect(cssClass).toContain('heading')
    expect(cssClass).toContain('text-right')
  })
})
