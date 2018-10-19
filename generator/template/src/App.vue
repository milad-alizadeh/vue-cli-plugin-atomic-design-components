---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<script[^]*?<\/script>/
  - !!js/regexp /<template[^]*?<\/template>/
---

<template>
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
