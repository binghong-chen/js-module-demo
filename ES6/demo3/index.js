// https://juejin.cn/post/6844904067651600391
// index.js
import { counter, incCounter } from './lib.js';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
counter = 100   // TypeError: Assignment to constant variable.
console.log(counter);
console.log(this)