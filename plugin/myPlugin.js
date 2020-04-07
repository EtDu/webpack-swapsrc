class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync('myPlugin', (stats, cb) => {
      const assetNames = []
      for (let assetName in stats.compilation.assets) {
        assetNames.push(assetName)
      }
      cb()
    })

    compiler.hooks.compilation.tap("MyPlugin", (compilation, params) => {
      //just before it starts to render code (seal)
      //fake module resolution!
      compilation.hooks.seal.tap('MyPlugin', () => {
      })
    })
  }
}
module.exports = MyPlugin

class Test {
  apply(compilation) {
    compilation.hooks.seal.tap('MyPlugin', () => {
      console.log(compilation)
    })
  }
}

//pass different values to apply