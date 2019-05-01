import { mount } from '@vue/test-utils'
import VImge from '.'

describe('Atom - VImge', () => {
  test('Caclculate the src correctly', async () => {
    const wrapper = await mount(VImge, {
      propsData: {
        src: 'https://via.placeholder.com/350x150'
      }
    })

    expect(wrapper.find('img').attributes().src).toBe('https://via.placeholder.com/350x150')
  })

  test('renders a picture tag', async () => {
    const wrapper = await mount(VImge, {
      propsData: {
        picture: true,
        src: 'https://via.placeholder.com/800x800',
        sources: [
          {
            srcset: 'https://via.placeholder.com/300x300',
            media: '(max-width: 300px)'
          },
          {
            srcset: 'https://via.placeholder.com/600x600',
            media: '(max-width: 600px)'
          }
        ]
      }
    })

    let sources = wrapper.findAll('source')

    expect(wrapper.find('picture').exists()).toBe(true)
    expect(sources.length).toBe(2)
    expect(sources.at(0).attributes().media).toBe('(max-width: 300px)')
    expect(sources.at(0).attributes().srcset).toBe('https://via.placeholder.com/300x300')
  })
})
