import { mount } from '@vue/test-utils'
import VTable from '.'

describe('Molecule - VTable', () => {
  test('renders the slots correctly', () => {
    const wrapper = mount(VTable, {
      slots: {
        head: '<tr><th>Table Head Content</th></tr>',
        body: '<tr><td>Table Body Content</td></tr>',
        foot: '<tr><td>Table Foot Content</td></tr>'
      }
    })

    expect(wrapper.find('thead').html()).toContain('<tr><th>Table Head Content</th></tr>')
    expect(wrapper.find('tbody').html()).toContain('<tr><td>Table Body Content</td></tr>')
    expect(wrapper.find('tfoot').html()).toContain('tr><td>Table Foot Content</td></tr>')
  })

  test('add the correct css classes', () => {
    const wrapper = mount(VTable, {
      propsData: {
        stickyHeader: true
      }
    })
    expect(wrapper.attributes().class).toContain('sticky-header')
  })
})
