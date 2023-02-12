// https://juejin.cn/post/6844904067651600391
var a = require('./a.js');
var b = require('./b.js');
console.log('index.js', this)
console.log('在 index.js 之中, a.done=%j, b.done=%j', a.done, b.done);