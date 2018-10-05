import { mount } from '@vue/test-utils'
import VFormTel from '.'

describe('Molecule - VFormTel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormTel, {
      propsData: {
        value: '',
        type: 'text'
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Phone Number'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Phone Number')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toBe('')

    wrapper.setProps({
      errorMessages: 'Please enter your number'
    })
    wrapper.setData({
      error: true
    })

    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toContain('Please enter your number')
  })
})
