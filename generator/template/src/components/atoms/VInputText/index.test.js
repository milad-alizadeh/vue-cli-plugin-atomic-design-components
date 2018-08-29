import { mount } from '@vue/test-utils'
import VInputText from '.'

describe('Atom - VInputText', () => {
  test('Two way data binding', () => {
    const wrapper = mount(VInputText, {
      propsData: {
        type: 'text'
      }
    })

    // Trigger input
    const input = wrapper.find('input')
    input.element.value = 'Hello World'
    input.trigger('input')

    // Check emitted event
    const emittedInput = wrapper.emitted().input
    expect(emittedInput).toBeTruthy()
    expect(emittedInput[0][0]).toBe('Hello World')
  })
})
