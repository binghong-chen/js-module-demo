require('./lib')

// console.log(module.require('./lib')) // anonymous
// console.log(require)    // resolve main cache extensions
console.log('require equal', module.require === require)
console.log('index.js', require.main === module)
exports.name = 'index.js'