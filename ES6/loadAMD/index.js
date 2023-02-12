import "amd-loader";

// SyntaxError: The requested module './AMD.js' does not provide an export named 'default'
// 因为 `package.json` 的 type 是 module
// import AMD from "./AMD.js";
// console.log(AMD)

// import a from "../../AMD/demo1";   // ERR_UNSUPPORTED_DIR_IMPORT
// import a from "../../AMD/demo1/index";  // ERR_MODULE_NOT_FOUND
import AMDDemo1 from "../../AMD/demo1/index.js";
console.log(AMDDemo1)
AMDDemo1.foo()
