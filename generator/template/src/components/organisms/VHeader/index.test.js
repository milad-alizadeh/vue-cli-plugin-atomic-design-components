import { shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from '.'

const router = new VueRouter()
const $route = {
  name: 'SomePage',
  path: '/some/path'
}

describe('Organism - Header', () => {
  test('renders correctly when correct props are passed', () => {
    const wrapper = shallowMount(Header, {
      router,
      mocks: {
        $route
      },
      stubs: ['router-link']
    })

    expect(wrapper.exists()).toBe(true)
  })

  test('toggleMenu', () => {
    const wrapper = shallowMount(Header, {
      router,
      mocks: {
        $route
      },
      stubs: ['router-link']
    })
    wrapper.vm.menuIsOpen = true
    expect(wrapper.html()).toContain('is-open')

    wrapper.find('.o-header__overlay').trigger('click')
    expect(wrapper.vm.menuIsOpen).toBeFalsy()
    expect(wrapper.html()).toEqual(expect.not.stringContaining('is-open'))
  })
})
