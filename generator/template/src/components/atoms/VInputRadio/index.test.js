import { mount } from '@vue/test-utils'
import VInputRadio from '.'

describe('Atom - VInputRadio', () => {
  test('Two way data binding', () => {
    const wrapper = mount(VInputRadio, {
      propsData: {
        value: 'Option 1'
      }
    })

    const input = wrapper.find('input')
    input.trigger('change', true)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toBe('Option 1')
  })

  test('Has correct classes based on passed props', () => {
    const wrapper = mount(VInputRadio, {
      propsData: {
        checked: true,
        required: true,
        value: 'Option 2',
        disabled: true
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes().value).toBe('Option 2')
    expect(input.attributes().disabled).toBe('disabled')
  })
})
