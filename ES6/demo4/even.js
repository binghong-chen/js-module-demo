// even.js
import { odd } from './odd.js'
console.log('even.js')
export var counter = 0;
export function even(n) {
  counter++;
  return n === 0 || odd(n - 1);
}