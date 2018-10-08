import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VPlaceholder from '.'

const wrapper = {
  components: { VPlaceholder },
  propsDescription: {
    type: `Type of placeholder. Options: ['bullet-list', 'text']`,
    imageGraphic: `Available only on 'image' type. The name of graphic to be used as the center icon`,
    aspectRatio: `Available only on 'image' type. The ratio of the placeholder box. It equals to width/height. for example 400x300 image ratio will be 400/300 = 1.33`,
    lines: `Available only on ['text', 'bullet-list'] type. The number of lines of placeholders.`,
    lineScale: `Available only on ['text', 'bullet-list'] type. The scale multiplier for placeholder lines. For example '2' will double the size of each line`,
    lineHeight: `Available only on ['text', 'bullet-list'] type. The space between each placeholder line. '1.5' would be 1.5 times the space`,
    roundedCorners: `Available only on ['text', 'bullet-list'] type. Make each placeholder line rounded`,
    color1: 'The main background color for placeholder. Value in HEX or RGB',
    color2: 'The second background color for placeholder. Value in HEX or RGB',
    speed: `The speed of animation in seconds`,
    animation: 'Disable/Enable animation on placeholder'
  }
}

storiesOf('Atom - VPlaceholder', module)
  .addDecorator(VueInfoAddon)
  .add('text', () => ({
    ...wrapper,
    template: `<VPlaceholder type="text" :lines="3"/>`
  }))
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
  }))
  .add('colors', () => ({
    ...wrapper,
    template: `<VPlaceholder type="text" color1="#e74c3c" color2="#f1c40f"/>`
  }))
  .add('bullet-list', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="bullet-list" :lines="4" />

        <br/>

        <VPlaceholder type="bullet-list" :lines="2" :roundedCorners="false"/>
      </div>
    `
  }))
  .add('image', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="image" :speed=".7" :aspectRatio="2"/>

        <br/>

        <VPlaceholder type="image" :speed=".7" imageGraphic="logo" />
      </div>
    `
  }))
  .add('mixed', () => ({
    ...wrapper,
    template: `
      <div>
        <VPlaceholder type="image" :speed="1.5" imageGraphic="logo" />

        <br/>

        <VPlaceholder type="text" :lines="4" />

        <br/>

        <VPlaceholder type="bullet-list" :lines="4" />

        <br/>
      </div>
    `
  }))
