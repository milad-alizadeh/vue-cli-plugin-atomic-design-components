export default {
  firstName: {
    required: 'Please enter your first name',
    minLength: 'Your first name needs to be at least 2 characters long'
  },
  lastName: {
    required: 'Please enter your last name',
    minLength: 'Your last name needs to be at least 2 characters long'
  },
  email: {
    required: 'Please enter your email',
    email: 'Your email is not in the correct format'
  },
  phoneNumber: {
    valid: 'Please enter a valid phone number'
  },
  countryOfResidence: {
    required: 'Please select your country of residence'
  },
  password: {
    required: 'Please enter a password',
    minLength: 'Password needs to be at least 8 character long',
    containsUpperCase: 'Password needs to contain at least one upper case character',
    containsLowerCase: 'Password needs to contain at least one lower case character',
    containsNumber: 'Password needs to contain at least one number',
    containsSpecialCharacter: 'Password needs to contain at least one special character. !@#$%&*()'
  },
  securityQuestion: {
    required: 'Please select a security question'
  },
  securityAnswer: {
    required: 'Please enter a security answer'
  },
  cardHolder: {
    required: 'Please enter the name on your card',
    minLength: 'Card holder\'s name needs to be at least 3 characters'
  },
  creditCard: {
    valid: 'Please enter a valid card number',
    required: 'Please enter your card number'
  },
  securityCode: {
    required: 'Please enter the security code on your card'
  },
  expiry: {
    required: 'Please enter the expiry date on your card',
    isFuture: 'Expiry date can not be set in past',
    valid: 'Please enter a valid expiry date'
  }
}
