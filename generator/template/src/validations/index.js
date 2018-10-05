import {
  email as emailValidator,
  url as urlValidator,
  macAddress as macAddressValidator,
  required as requiredValidator,
  minLength as minLengthValidator
} from 'vuelidate/lib/validators'

/**
 * Password Validator
 * Passwords will contain at least 1 upper case letter
 * Passwords will contain at least 1 lower case letter
 * Passwords will contain at least 1 number or special character
 * Passwords will contain at least 8 characters in length
 * Password maximum length should not be arbitrarily limited
 */
const lowerCaseLetters = /[a-z]/g
const upperCaseLetters = /[A-Z]/g
const numbers = /[0-9]/g
const specialCharacters = /[!@#$%&*()]/g

export const password = {
  containsSpecialCharacter: (value) => {
    return !!value.match(specialCharacters)
  },
  containsNumber: value => {
    return !!value.match(numbers)
  },
  containsLowerCase: value => {
    return !!value.match(lowerCaseLetters)
  },
  containsUpperCase: value => {
    return !!value.match(upperCaseLetters)
  },
  minLength: value => {
    return value.length > 8
  }
}

/**
 * Minimum length validator
 * @param  {Number} length
 */
export const minLength = minLengthValidator

/**
 * Name Validator
 */
export const name = {
  required: requiredValidator,
  minLength: minLength(2)
}

/**
 * Expiry Date Validator
 */
export const expiry = {
  isFuture: value => {
    let year = value.slice(2, 4)
    let monthIndex
    let date

    if (year.length === 2) {
      year = '20' + value.slice(2, 4)
      monthIndex = value.slice(0, 2)
      date = new Date(year, monthIndex)
      return date.getTime() > new Date().getTime()
    }

    return true
  },
  valid: value => {
    if (value.length > 0 && value.length < 4) {
      return false
    }

    return true
  },
  required: value => {
    if (value.length) return true
    return false
  }
}

/**
 * Email Validator
 */
export const email = emailValidator

/**
 * CreditCard Validator
 */
export const creditCard = {
  valid: card => {
    let { type, number } = card
    // Do not validate if card number is empty or is less than 2 characters
    if (!card.number || card.number.length < 2) return true
    // It needs to be at least minimum character specified in the type
    if (card.type && number.length < type.lengths[0]) return false

    return !!card.type
  },
  required: card => {
    if (card.number && card.number.length) return true
    return false
  }
}

/**
 * Mac Address Validator
 */
export const macAddress = macAddressValidator

/**
 * Url Validator
 */
export const url = urlValidator

/**
 * Required
 */
export const required = requiredValidator
