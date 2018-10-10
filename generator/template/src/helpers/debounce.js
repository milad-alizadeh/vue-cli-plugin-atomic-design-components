/**
 * Debounce function
 * @param  {Function} fn
 * @param  {Number}   time
 */
export default (fn, time) => {
  let timeout

  return function () {
    const functionCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}
