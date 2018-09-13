Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }
})()

export default {
  methods: {
    $scrollTo (to, duration = 500, offset = 0, callback) {
      if (typeof to === 'string') {
        let bodyRect = document.body.getBoundingClientRect()
        let element = document.querySelector(to)

        if (!element) return

        let elemRect = element.getBoundingClientRect()
        to = elemRect.top - bodyRect.top
      }

      to = to + offset

      const move = (amount) => {
        document.documentElement.scrollTop = amount
        document.body.parentNode.scrollTop = amount
        document.body.scrollTop = amount
      }

      const position = () => {
        return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
      }

      let start = position()
      let change = to - start
      let currentTime = 0
      let increment = 20

      const animateScroll = () => {
        // increment the time
        currentTime += increment
        // find the value with the quadratic in-out easing function
        let val = Math.easeInOutQuad(currentTime, start, change, duration)
        // move the document.body
        move(val)
        // do the animation unless its over
        if (currentTime < duration) {
          requestAnimFrame(animateScroll)
        } else {
          if (callback && typeof (callback) === 'function') {
            // the animation is done so lets callback
            callback()
          }
        }
      }
      animateScroll()
    }
  }
}
