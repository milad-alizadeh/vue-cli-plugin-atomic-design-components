import 'babel-polyfill'
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import StoryRouter from 'storybook-vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import VueTelInput from 'vue-tel-input'
import './style.scss'

Vue.use(Vuex)
Vue.use(Vuelidate)

setOptions({
  hierarchyRootSeparator: / - /,
  name: 'Vue Atomic Design',
  url: '#'
})

// Require all the .stories.js files from all components
const req = require.context('@/components', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach((filePath) => {
    const componentName = filePath.replace(/^.+\/([^/]+)\/index.stories.js/, '$1')
    const component = req(filePath)
    Vue.component(componentName, component)
    return component
  })

  Vue.component('VueTelInput', VueTelInput)
}

addDecorator(StoryRouter())

configure(loadStories, module)
