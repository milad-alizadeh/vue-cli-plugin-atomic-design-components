import { mount } from '@vue/test-utils'
import VNavList from '.'
const mockRoutePush = jest.fn()

const options = {
  propsData: {
    list: [
      {
        label: 'Home',
        to: '/home'
      }, {
        label: 'About',
        to: '/about'
      }
    ]
  },
  stubs: ['router-link'],
  mocks: {
    $router: {
      push: mockRoutePush
    }
  }
}

describe('Molecule - VNavList', () => {
  test('renders correctly with the right props', () => {
    const wrapper = mount(VNavList, options)
    expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.html()).toContain('Home')
    expect(wrapper.html()).toContain('About')
  })
})
