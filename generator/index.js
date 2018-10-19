const appTemplate = require('./app-template')

const addLine = (string, match, line) => {
  let lines = string.split(/\r?\n/g).reverse()
  let lastImportIndex = lines.findIndex(line => line.match(match))
  let alreadyAdded = lines.find(line => line.indexOf(line) > -1)

  if (!alreadyAdded) {
    lines[lastImportIndex] += `\n${line}`
    return lines.reverse().join('\n')
  }

  return string
}

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "vuelidate": "^0.7.4",
      "vue-tel-input": "^2.0.5",
      "credit-card-type": "^7.1.0"
    }
  })

  api.render('./template')

  api.postProcessFiles(files => {
    let webapp = files['src/web-app.js']
    let main = files['src/main.js']

    if (webapp) main = webapp

    if (main) {
      let content = addLine(main, /^import/, `import Vuelidate from 'vuelidate'`)
      let newContent = addLine(content, /^import Vuelidate from 'vuelidate'/, 'Vue.use(Vuelidate)')

      if (webapp) {
        files['src/web-app.js'] = newContent
      } else {
        files['src/main.js'] = newContent
      }
    }

    if (files['src/App.vue']) {
      files['src/App.vue'] = appTemplate
    }

    if (files['src/scss/utilities/_utilities']) {
      files['src/scss/utilities/_utilities'] = addLine(main, /^@import/, `@import 'u-form-field;'`)
    }
  })
}
