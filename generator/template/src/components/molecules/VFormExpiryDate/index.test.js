import { mount } from '@vue/test-utils'
import VFormExpiry from '.'

describe('Molecule - VFormExpiry', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormExpiry)
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Expiry Date'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Expiry Date')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toBe('')

    wrapper.setProps({
      errorMessages: 'Please enter a valid expiry date',
      error: true
    })

    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toContain('Please enter a valid expiry date')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })

  test('Renders the correct date format', () => {
    wrapper.setProps({ value: '1218' })
    expect(wrapper.find('input').element.value).toBe('12/18')
  })
})
