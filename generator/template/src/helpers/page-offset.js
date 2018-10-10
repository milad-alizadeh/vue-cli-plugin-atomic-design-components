/**
 * Get current page vertical offset (scroll position)]
 * @return {Number}
 */
export default () => {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}
