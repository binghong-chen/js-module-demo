// odd.js
import { even } from './even.js';
console.log('odd.js')
console.log(this)
export function odd(n) {
  return n !== 0 && even(n - 1);
}