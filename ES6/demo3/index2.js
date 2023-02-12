// https://juejin.cn/post/6844904067651600391
// index2.js
import mod from './lib.js';// SyntaxError: The requested module './lib.js' does not provide an export named 'default'
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);
mod.counter = 100
console.log(mod.counter);