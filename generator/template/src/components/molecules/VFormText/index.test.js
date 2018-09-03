import {mount} from '@vue/test-utils'
import VFormText from '.'

describe('Molecule - VFormText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormText, {
      propsData: {
        value: '',
        type: 'text'
      },
      stubs: {
        VInputText: {
          name: 'VInputText',
          template: '<input type="text" />'
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

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Full Name'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Full Name')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VText' }).exists()).toBe(false)

    wrapper.setProps({
      errorMessage: 'Please enter your name',
      error: true
    })

    expect(wrapper.find({ name: 'VText' }).text()).toContain('Please enter your name')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, success: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
    expect(wrapper.attributes().class).toContain('success')
  })
})
