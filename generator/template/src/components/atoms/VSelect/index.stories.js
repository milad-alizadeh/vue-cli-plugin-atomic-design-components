import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import VSelect from '.'

const wrapper = {
  components: { VSelect },
  propsDescription: {
    options: 'Available options for the select. A single option format is: { label: String, value: String }',
    value: 'Value of Select box',
    disabled: 'Disables the select by adding "disabled" attribute',
    required: 'Adds the required attribute to input',
    name: 'name attribute for select',
    id: 'Id attribute for the select',
    emptyValueLabel: 'The value of empty (default) label'
  }
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
  }))
