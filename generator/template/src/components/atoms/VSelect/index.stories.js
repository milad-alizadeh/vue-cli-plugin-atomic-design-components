import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import components from 'components'

const wrapper = {
  components,
  propsDescription: {
    options: 'Available options for the select. A single option format is: { label: String, value: String }',
    value: 'Value of Select box'
  }
}

storiesOf('Atom - VSelect', module)
  .addDecorator(VueInfoAddon)
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
  }))
