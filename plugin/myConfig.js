const rootSrc = require.resolve('../src/index')
module.exports = {
  resolveLoader: {
    alias: {
      "my-loader": require.resolve("./my-loader")
    }
  },
  module: {
    rules: [
      {
        test: /\.js/, use: {
          loader: "my-loader",
          options: {
            moduleReplacements: {
              root: {
                path: rootSrc,
                newPath: "; console.log('this is the source replacement for root')"
              }
            }
          }
        }
      }
    ]
  }
}