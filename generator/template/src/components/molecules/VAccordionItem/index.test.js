import { mount } from '@vue/test-utils'
import VAccordionItem from '.'

describe('Molecule - VAccordionItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VAccordionItem, {
      slots: {
        title: '<span>Hello World</span>',
        content: '<p>Panel Content</p>'
      }
    })
  })

  test('render the panel correctly', () => {
    expect(wrapper.find('.v-m-accordion-item__header').html()).toContain('<span>Hello World</span>')
    expect(wrapper.find('.v-m-accordion-item__content').html()).toContain('<p>Panel Content</p>')
  })

  test('change initial state using the isOpen prop', () => {
    wrapper.setProps({ isOpen: true })
    expect(wrapper.attributes().class).toContain('is-expanded')
  })

  test('toggles the accordion when clicked', () => {
    wrapper.find('.v-m-accordion-item__header').trigger('click')
    expect(wrapper.attributes().class).toContain('is-expanded')
  })
})
