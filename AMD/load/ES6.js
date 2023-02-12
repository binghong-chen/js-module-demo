
//Error [ERR_REQUIRE_ESM]: require() of ES Module 
// /Users/chenbinghong/Study/FrontEnd/js-module-demo/ES6/demo1/index.js 
// from 
// Users/chenbinghong/Study/FrontEnd/js-module-demo/CommonJS/loadAMD/node_modules/amd-loader/amd-loader.js 
// not supported.
define(['../../ES6/demo1/index.js'], function (ES6) {
    function hi() {
      console.log("hi!");
    }
  
    return {
      hi,
      ES6,
    };
  });
    