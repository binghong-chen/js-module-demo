define(["./ES6_2"], function (ES6) {
    console.log({ES6})
    function foo() {
      lib.log("hello world!");
    }
  
    return {
      foo: foo,
      ES6,
    };
  });
  