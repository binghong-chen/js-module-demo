import demo1, { name } from "./demo1.js";

console.log({ demo1, name });

export const value = 123;

export default {
  value: 100,
  hi() {
    console.log("hi");
  },
};
