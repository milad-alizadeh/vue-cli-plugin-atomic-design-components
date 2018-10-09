import { mount } from '@vue/test-utils'
import VTableRow from '.'

describe('Atom - VTableRow', () => {
  test('renders the slot correctly', () => {
    const wrapper = mount(VTableRow, {
      slots: {
        default: 'Row Content'
      }
    })

    expect(wrapper.html()).toContain('Row Content')
  })
})
