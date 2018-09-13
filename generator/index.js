module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      vuelidate: "^0.7.4",
      "vue-tel-input": "^2.0.5",
      "credit-card-type": "^7.1.0"
    }
  })

  api.render('./template')

  api.injectImports('src/main.js', `import Vuelidate from 'vuelidate'`)

  api.postProcessFiles(files => {
    let main = files['src/main.js']
    if (main) {
      const lines = main.split(/\r?\n/g).reverse()
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))
      lines[lastImportIndex] += `\n Vue.use(Vuelidate)`
      main = lines.reverse().join('\n')
    }
  })
}
