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
      const lines = main.split(/\r?\n/g).reverse()
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))
      lines[lastImportIndex] += `\nimport Vuelidate from 'vuelidate'\nVue.use(Vuelidate)`

      if (webapp) {
        files['src/web-app.js'] = lines.reverse().join('\n')
      } else {
        files['src/main.js'] = lines.reverse().join('\n')
      }
    }
  })
}
