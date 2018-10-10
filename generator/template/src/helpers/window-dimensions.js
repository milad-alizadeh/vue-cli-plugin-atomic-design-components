/**
 * Get the window dimensions
 * @return {Object}
 */
export default () => {
  let w = window
  let d = document
  let e = d.documentElement
  let g = d.getElementsByTagName('body')[0]

  return {
    windowWidth: w.innerWidth || e.clientWidth || g.clientWidth,
    windowHeight: w.innerHeight || e.clientHeight || g.clientHeight
  }
}
