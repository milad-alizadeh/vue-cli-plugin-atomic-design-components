import { mount } from '@vue/test-utils'
import VInputCheckbox from '.'

describe('Atom - VInputCheckbox', () => {
  test('Two way data binding', () => {
    const wrapper = mount(VInputCheckbox)

    wrapper.find('input').trigger('click')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0][0]).toBe(true)
  })

  test('Has correct classes based on passed props', () => {
    const wrapper = mount(VInputCheckbox, {
      propsData: {
        checked: true,
        required: true,
        value: 'Option 2',
        disabled: true
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes().value).toBe('Option 2')
    expect(input.attributes().required).toBe('required')
    expect(input.attributes().disabled).toBe('disabled')
  })
})
