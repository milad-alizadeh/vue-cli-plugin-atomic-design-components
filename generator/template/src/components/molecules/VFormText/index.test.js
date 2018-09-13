import {mount} from '@vue/test-utils'
import VFormText from '.'

describe('Molecule - VFormText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormText, {
      propsData: {
        value: '',
        type: 'text'
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Full Name'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Full Name')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toBe('')

    wrapper.setProps({
      errorMessages: 'Please enter your name',
      error: true
    })

    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toContain('Please enter your name')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, success: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
    expect(wrapper.attributes().class).toContain('success')
  })
})
