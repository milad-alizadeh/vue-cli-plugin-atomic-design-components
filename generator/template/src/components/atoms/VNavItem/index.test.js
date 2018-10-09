import { mount } from '@vue/test-utils'
import VNavItem from '.'

const wrapper = mount(VNavItem, {
  stubs: ['router-link']
})

describe('Atom - VNavItem', () => {
  test('renders correctly with the right props', () => {
    expect(wrapper.find('.v-a-nav-item').exists()).toBe(true)
  })

  test('click', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
