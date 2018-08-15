import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'
import Button from '.'

storiesOf('Atom - Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(StoryRouter())
  .add('default', () => ({
    components: { Button },
    template: '<Button>Click here</Button>'
  }))
  .add('success', () => ({
    components: { Button },
    template: '<Button success>Click here</Button>'
  }))
  .add('error', () => ({
    components: { Button },
    template: '<Button error>Click here</Button>'
  }))
  .add('warning', () => ({
    components: { Button },
    template: '<Button warning>Click here</Button>'
  }))
  .add('disabled', () => ({
    components: { Button },
    template: '<Button disabled>Click here</Button>'
  }))
  .add('link', () => ({
    components: { Button },
    template: '<Button href="https://google.com">Click here</Button>'
  }))
  .add('router-link', () => ({
    components: { Button },
    template: '<Button to="/home">Click here</Button>'
  }))
  .add('click event', () => ({
    components: { Button },
    template: '<Button @click="action">Click here</Button>',
    methods: { action: action('button clicked') }
  }))
