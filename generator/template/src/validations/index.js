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
 * Email Validator
 */
export const email = emailValidator

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
