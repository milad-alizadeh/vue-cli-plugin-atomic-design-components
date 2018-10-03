/**
 * Limit the length of an input field
 * @param  {Object}  e event object
 */
export default (e, length) => {
  if (e.target.value.length >= length) {
    e.preventDefault()
  }
}
