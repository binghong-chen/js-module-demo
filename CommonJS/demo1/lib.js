exports.name = 'lib'

console.log(module.exports === exports) // true

exports = {
    value: 100
}

console.log(module.exports === exports) // false