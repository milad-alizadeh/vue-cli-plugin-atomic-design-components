import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VAccordionItem from '.'

const wrapper = {
  components: { VAccordionItem },
  propsDescription: {
    isOpen: 'Whether the accordion item should be expanded'
  }
}

storiesOf('Molecule - VAccordionItem', module)
  .addDecorator(VueInfoAddon)
  .add('defualt', () => ({
    ...wrapper,
    template: `
      <VAccordionItem>
        <template slot="title">This is the expansion title</template>
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
        </template>
      </VAccordionItem>
    `
  }))
  .add('isOpen', () => ({
    ...wrapper,
    template: `
      <VAccordionItem isOpen>
        <template slot="title">This is the expansion title</template>
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
        </template>
      </VAccordionItem>
    `
  }))
