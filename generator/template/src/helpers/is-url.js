/**
 * Check if a given string is a valid url
 * @param  {String}  str input
 * @return {Boolean}
 */
export default (str) => {
  let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return regexp.test(str)
}
