import { mount } from '@vue/test-utils'
import VFormCreditCard from '.'

describe('Molecule - VFormCreditCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormCreditCard, {
      propsData: {
        value: {
          number: '5253111111111111'
        }
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Credit Card Number'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Credit Card Number')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toBe('')

    wrapper.setProps({
      errorMessages: 'Please enter a valid credit card number',
      error: true
    })

    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toContain('Please enter a valid credit card number')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })

  test('Renders the right credit card icon', () => {
    let iconClass = wrapper.find({ name: 'VIcon' }).attributes().class
    expect(iconClass).toContain('credit-card-mastercard')
  })
})
