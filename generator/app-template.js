module.exports = `<template>
  <div id="app">WebApp</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  mounted () {
    this.detectWebp()
    this.setWindowSize()
    this.addListeners()
  },
  methods: {
    ...mapMutations('global', [
      'setWindowSize'
    ]),
    ...mapActions('global', [
      'detectWebp',
      'addListeners'
    ])
  }
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';

  #app {
    max-width: 100%;
    overflow: hidden;
    min-height: 100vh;
  }
</style>
`
