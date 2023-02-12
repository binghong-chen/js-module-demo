require("amd-loader");
var AMD = require("./AMD");
console.log(AMD);

const AMDDemo1 = require("../../AMD/demo1");
AMDDemo1.foo();

const AMDLoadCommonJS = require("../../AMD/load/CommonJS");
console.log({ AMDLoadCommonJS });

const AMDLoadCommonJS2 = require("../../AMD/load/CommonJS2");
console.log({ AMDLoadCommonJS2 });

// const AMDLoadES6 = require("../../AMD/load/ES6");
// console.log({ AMDLoadES6 });

const AMDLoadES6_2 = require("../../AMD/load/ES6_2");
AMDLoadES6_2.then((value) => console.log({ AMDLoadES6_2: value }));
console.log({ AMDLoadES6_2 });

const AMDLoadES6_2_2 = require("../../AMD/load/AMDLoadES6_2");
const { ES6 } = require("../../AMD/load/AMDLoadES6_2");
console.log({ AMDLoadES6_2_2, ES6 });
ES6.then((value) => console.log({ ES6: value }));
