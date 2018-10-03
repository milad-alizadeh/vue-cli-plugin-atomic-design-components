/**
 * Only allow digit key presses on an input
 * @param  {Object}  e event object
 * @return {Boolean}
 */
export default (e) => {
  let charCode = (e.which) ? e.which : e.keyCode
  if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
    e.preventDefault()
  } else {
    return true
  }
}
