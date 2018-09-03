import {mount} from '@vue/test-utils'
import VFormRadio from '.'

describe('Molecule - VFormRadio', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormRadio, {
      propsData: {
        value: '',
        options: [
          {
            label: 'Option 1',
            value: 'option1'
          }, {
            label: 'Option 2',
            value: 'option2'
          }
        ]
      },
      stubs: {
        VSelect: {
          name: 'VSelect',
          template: '<select></select>'
        },
        VLabel: {
          name: 'VLabel',
          template: '<label><slot></slot></label>'
        },
        VText: {
          name: 'VText',
          template: '<p><slot></slot></p>'
        }
      }
    })
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VText' }).exists()).toBe(false)

    wrapper.setProps({
      errorMessage: 'Please enter your name',
      error: true
    })

    expect(wrapper.find({ name: 'VText' }).text()).toContain('Please enter your name')
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Choose your country'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Choose your country')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, success: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
    expect(wrapper.attributes().class).toContain('success')
  })
})
