import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import NavList from '.'

const mockRoutePush = jest.fn()

const options = {
  propsData: {
    list: [
      {
        label: 'Home',
        link: '/home'
      }, {
        label: 'About',
        link: '/about'
      }
    ]
  },
  stubs: {
    NavItem: {
      template: `
        <li @click="$emit('click')">
          <slot></slot>
        </li>`
    }
  },
  mocks: {
    $router: {
      push: mockRoutePush
    }
  }
}

describe('Molecule - NavList', () => {
  test('renders correctly with the right props', () => {
    const wrapper = shallowMount(NavList, options)

    expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.html()).toContain('Home')
    expect(wrapper.html()).toContain('About')
  })

  test('has same html structure', () => {
    const wrapper = shallowMount(NavList, options)

    createRenderer().renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error(err)
      }
      expect(str).toMatchSnapshot()
    })
  })
})
