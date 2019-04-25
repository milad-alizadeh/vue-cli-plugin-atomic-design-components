import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VAccordionItem from '.'

const wrapper = {
  components: { VAccordionItem }
}

storiesOf('Molecule - VAccordionItem', module)
  .addDecorator(withInfo)
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
  }), { info: true })
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
  }), { info: true })
