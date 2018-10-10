/**
 * Throttle function
 * @param  {Function} callback
 * @param  {Numbner}  wait
 * @param  {Object}   [context=this]
 * @return {Function}
 */
export default (callback, wait, context = this) => {
  let timeout = null
  let callbackArgs = null

  const later = () => {
    callback.apply(context, callbackArgs)
    timeout = null
  }

  return function () {
    if (!timeout) {
      callbackArgs = arguments
      timeout = setTimeout(later, wait)
    }
  }
}
