import { mount } from '@vue/test-utils'
import VList from '.'

describe('Atom - VList', () => {
  test('Renders correct tag', () => {
    const wrapper = mount(VList, {
      propsData: {
        ordered: true
      }
    })

    expect(wrapper.is('ol')).toBe(true)
  })
  test('Renders slots', () => {
    const wrapper = mount(VList, {
      propsData: {
        level: 1
      },
      slots: {
        default: `
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        `
      }
    })

    const li = wrapper.findAll('li')

    expect(li.length).toBe(3)
    expect(li.at(2).text()).toBe('List Item 3')
  })
})
