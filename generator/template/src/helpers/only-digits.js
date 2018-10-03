/**
 * Return only digits from a given string
 * @param  {String} string
 * @return {String}
 */
export default (string) => {
  return string.replace(/[^0-9]+/g, '')
}
