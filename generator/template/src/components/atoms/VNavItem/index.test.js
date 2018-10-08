import { mount } from '@vue/test-utils'
import VNavItem from '.'

const wrapper = mount(VNavItem, {
  stubs: ['router-link']
})

describe('Atom - VNavItem', () => {
  test('renders correctly with the right props', () => {
    expect(wrapper.find('.a-nav-item').exists()).toBe(true)
  })

  test('click', () => {
    wrapper.find('li').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
