import {mount} from '@vue/test-utils'
import VFormCheckbox from '.'

describe('Molecule - VFormCheckbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormCheckbox, {
      propsData: {
        value: ''
      },
      stubs: {
        VText: true,
        VLabel: {
          name: 'VLabel',
          template: '<label><slot></slot></label>'
        },
        VInputCheckbox: {
          name: 'VInputCheckbox',
          template: '<input type="checkbox" />'
        }
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find('.v-m-form-checkbox__question').exists()).toBe(false)

    wrapper.setProps({
      label: 'Choose your country',
      options: [
        {
          label: 'Option 1',
          value: 'option1'
        }
      ]
    })

    expect(wrapper.find('.v-m-form-checkbox__question').text()).toBe('Choose your country')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({disabled: true, success: true, error: true})

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
    expect(wrapper.attributes().class).toContain('success')
  })

  test('Renders one checkbox if options is not passed', () => {
    const input = wrapper.findAll({ name: 'VInputCheckbox' })

    expect(input.length).toBe(1)
  })

  test('Renders multiple checkbox if options is passed', () => {
    wrapper.setProps({
      options: [
        {
          label: 'Option 1',
          value: 'option1'
        }, {
          label: 'Option 2',
          value: 'option2'
        }
      ]
    })

    const inputs = wrapper.findAll({ name: 'VInputCheckbox' })
    const labels = wrapper.findAll({ name: 'VLabel' })

    expect(inputs.length).toBe(2)
    expect(labels.length).toBe(2)
    expect(inputs.at(0).attributes().value).toBe('option1')
    expect(labels.at(1).text()).toContain('Option 2')
  })
})
