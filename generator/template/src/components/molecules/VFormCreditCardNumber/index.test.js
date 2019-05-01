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
})
