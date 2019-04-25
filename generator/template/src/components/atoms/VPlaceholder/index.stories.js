import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VPlaceholder from '.'

const wrapper = {
  components: { VPlaceholder }
}

storiesOf('Atom - VPlaceholder', module)
  .addDecorator(withInfo)
  .add('text', () => ({
    ...wrapper,
    template: `<VPlaceholder type="text" :lines="3"/>`
  }), { info: true })
  .add('line variations', () => ({
    ...wrapper,
    template: `
      <div>
        <p>Heading Placeholder</p><br>

        <VPlaceholder type="text" :lines="2" :lineScale="2" :lineHeight=".75"/>

        <br/><p>Paragraph Placeholder</p><br>

        <VPlaceholder type="text" :lines="5" />

        <br/><p>Paragraph Placeholder non-rounded corners</p><br>

        <VPlaceholder type="text" :lines="4" :roundedCorners="false"/>
      </div>
    `
  }), { info: true })
  .add('colors', () => ({
    ...wrapper,
    template: `<VPlaceholder type="text" color1="#e74c3c" color2="#f1c40f"/>`
  }), { info: true })
  .add('bullet-list', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="bullet-list" :lines="4" />

        <br/>

        <VPlaceholder type="bullet-list" :lines="2" :roundedCorners="false"/>
      </div>
    `
  }), { info: true })
  .add('image', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="image" :speed=".7" :aspectRatio="2"/>

        <br/>

        <VPlaceholder type="image" :speed=".7" imageGraphic="yosushi-logo" />
      </div>
    `
  }), { info: true })
  .add('mixed', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="image" :speed="1.5" imageGraphic="yosushi-logo" />

        <br/>

        <VPlaceholder type="text" :lines="4" />

        <br/>

        <VPlaceholder type="bullet-list" :lines="4" />

        <br/>
      </div>
    `
  }), { info: true })
