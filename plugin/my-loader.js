function myLoader(source) {
  const { path, newPath } = this.query.moduleReplacements.root
  if (this.resourcePath === path) {
    source = newPath
    console.log(source)
  }
  return source
}

module.exports = myLoader
