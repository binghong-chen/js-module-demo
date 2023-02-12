// https://juejin.cn/post/6844904067651600391
var mod = require('../demo2/lib');
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
mod.counter = 100
console.log(mod.counter); // 100
