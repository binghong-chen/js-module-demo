(async function () {
  /*
  Directory import 
  '/Users/chenbinghong/Study/FrontEnd/js-module-demo/ES6/demo1' 
  is not supported resolving ES modules imported from 
  /Users/chenbinghong/Study/FrontEnd/js-module-demo/CommonJS/loadES6/index3.js
  */
  // var ES6 = await import("../../ES6/demo1");
  var ES6 = await import("../../ES6/demo1/index.js");
  console.log({ ES6 });
  const { value, default: defaultValue } = ES6;
  console.log({ value, defaultValue });
  console.log(typeof ES6); // 'object'
  var forCommonJS = await import("../../ES6/forCommonJS/index.mjs");
  console.log({ forCommonJS });
})();
