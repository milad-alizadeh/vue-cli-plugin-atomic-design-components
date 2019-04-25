import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VSelect from '.'

const wrapper = {
  components: { VSelect }
}

storiesOf('Atom - VSelect', module)
  .addDecorator(withInfo)
  .add('single', () => ({
    ...wrapper,
    template: `
      <div>
        <label>Select one of these options</label>
        <VSelect v-model="selectedValue" :options="options"/>

        <br/><br/>

        Value is : "{{ selectedValue }}"
      </div>
    `,
    data () {
      return {
        selectedValue: 'b',
        options: [
          {
            label: 'Option A',
            value: 'a'
          },
          {
            label: 'Option B',
            value: 'b'
          },
          {
            label: 'Option C',
            value: 'c'
          },
          {
            label: 'Option D',
            value: 'd',
            disabled: true
          }
        ]
      }
    }
  }), { info: true })
