import { mount } from '@vue/test-utils'
import VButton from '.'

describe('Atom - VButton', () => {
  test('Default tag is <button>', () => {
    const wrapper = mount(VButton)
    expect(wrapper.contains('button')).toBe(true)
  })

  test('Tag should be <a> if href is available', () => {
    const wrapper = mount(VButton, {
      propsData: { href: 'http://google.com' }
    })

    expect(wrapper.contains('a')).toBe(true)
    expect(wrapper.attributes().href).toBe('http://google.com')
  })

  test('Tag should be <router-link> if "to" prop is available', () => {
    const wrapper = mount(VButton, {
      propsData: {
        to: '/home'
      },
      stubs: ['router-link']
    })

    expect(wrapper.contains('router-link-stub')).toBe(true)
    expect(wrapper.attributes().to).toBe('/home')
  })

  test('Renders the correct classes based on props passed', () => {
    const wrapper = mount(VButton, {
      propsData: {
        success: true,
        warning: true,
        error: true,
        disabled: true
      },
      stubs: ['router-link']
    })

    expect(wrapper.attributes().class).toContain('success')
    expect(wrapper.attributes().class).toContain('warning')
    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })

  test('Renders slots', () => {
    const wrapper = mount(VButton, {
      slots: {
        default: 'Click here'
      }
    })

    expect(wrapper.text()).toContain('Click here')
  })

  test('Emits click event', () => {
    const wrapper = mount(VButton)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
