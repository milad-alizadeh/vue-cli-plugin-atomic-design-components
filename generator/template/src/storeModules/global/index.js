import debounce from '@/helpers/debounce'
import throttle from '@/helpers/throttle'
import windowDimensions from '@/helpers/window-dimensions'
import webpSupport from '@/helpers/webp-support'
import pageOffset from '@/helpers/page-offset'

const state = {
  webp: false,
  windowWidth: 0,
  windowHeight: 0,
  scrollTop: 0
}

const mutations = {
  setWebp (state, payload) {
    state.webp = payload
  },
  /**
   * Set window width and height
   */
  setWindowSize (state) {
    let { windowWidth, windowHeight } = windowDimensions()

    state.windowHeight = windowHeight
    state.windowWidth = windowWidth
  },

  setScrollTop (state) {
    state.scrollTop = pageOffset()
  }
}

const actions = {
  /**
   * Set webp detection asynchronously
   */
  async detectWebp ({ dispatch, commit }) {
    if (await webpSupport('supportsWebp')) {
      commit('setWebp', true)
    } else {
      commit('setWebp', false)
    }
  },

  /**
  * Add window event listeners
  */
  addListeners ({ commit }) {
    window.addEventListener('resize', debounce(() => commit('setWindowSize'), 100))
    window.addEventListener('scroll', throttle(() => commit('setScrollTop'), 200))
  }
}

export default {
  state,
  mutations,
  actions
}
