import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import VGenericForm from '.'
import { required, email, password, name, creditCard, expiry } from '@/validations'
import countryList from './country-list'
import securityQuestions from './security-questions'

const wrapper = {
  components: { VGenericForm }
}

storiesOf('Organism - VGenericForm', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    ...wrapper,
    template: `
      <div>
        <VGenericForm
          :fields="fields"
          :validations="validations"
          @submit="handleSubmit"
          v-model="formData"
        />

        <br/>
        <pre>{{ formData }}</pre>
      </div>
    `,
    methods: {
      handleSubmit: action('handleSubmit'),
      processForm (data) {
        if (data) {
          let dataObject = {
            ...data,
            phoneNumber: data.phoneNumber.number,
            phoneNumberCountryCode: data.phoneNumber.country.dialCode
          }

          const formData = new FormData()
          for (let key in dataObject) {
            formData.append(key, dataObject[key])
          }
        }
      }
    },
    data () {
      return {
        formData: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          countryOfResidence: '',
          phoneNumber: {
            number: ''
          },
          language: 'en',
          securityQuestion: '',
          securityAnswer: '',
          payment: {
            cardHolder: '',
            creditCardNumber: '',
            securityCode: '',
            expiry: ''
          }
        },
        validations: {
          firstName: name,
          lastName: name,
          email: { email, required },
          creditCardNumber: { required },
          cardHolder: { required },
          countryOfResidence: { required },
          securityQuestion: { required },
          securityAnswer: { required },
          password,
          payment: {
            creditCard,
            cardHolder: { required },
            securityCode: { required },
            expiry
          }
        },
        fields: [
          {
            name: 'firstName',
            component: 'VFormText',
            type: 'text',
            label: 'First Name'
          },
          {
            name: 'lastName',
            component: 'VFormText',
            type: 'text',
            label: 'Last Name'
          },
          {
            name: 'email',
            component: 'VFormText',
            type: 'text',
            label: 'Email'
          },
          {
            name: 'phoneNumber',
            component: 'VFormTel',
            label: 'Phone Number',
            placeholder: 'Enter a phone number',
            autocomplete: false,
            errorMessage: 'Please enter a valid phone number'
          },
          {
            name: 'password',
            component: 'VFormText',
            type: 'password',
            label: 'Password',
            autocomplete: 'off',
            visibleValidation: true
          },
          {
            name: 'countryOfResidence',
            component: 'VFormSelect',
            label: 'Choose your country',
            options: countryList
          },
          {
            name: 'securityQuestion',
            component: 'VFormSelect',
            label: 'Security question',
            options: securityQuestions
          },
          {
            name: 'securityAnswer',
            component: 'VFormText',
            type: 'text',
            label: 'Security Answer',
            conditionalRendering: {
              field: 'securityQuestion',
              operator: '!=',
              value: ''
            }
          },
          {
            name: 'payment',
            component: 'VFormPayment',
            label: {
              creditCardNumber: 'Credit Card Number',
              expiry: 'Expiry date',
              cardHolder: 'Cardholder\'s Name',
              securityCode: 'Security'
            }
          }
        ]
      }
    }
  }), { info: true })
