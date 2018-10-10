import { mount } from '@vue/test-utils'
import VAccordion from '.'

describe('Molecule - VAccordion', () => {
  test('render the list correctly', () => {
    const wrapper = mount(VAccordion, {
      propsData: {
        items: [
          {
            title: 'Title 1',
            content: 'Content 1'
          },
          {
            title: 'Title 2',
            content: 'Content 2'
          },
          {
            title: 'Title 3',
            content: 'Content 3'
          },
          {
            title: 'Title 5',
            content: '<p>Content 3</p>'
          }
        ]
      }
    })

    let panels = wrapper.findAll({ name: 'VAccordionItem' })
    expect(panels.length).toBe(4)
    expect(panels.at(3).html()).toContain('Title 5')
    expect(panels.at(3).html()).toContain('<p>Content 3</p>')
  })
})
