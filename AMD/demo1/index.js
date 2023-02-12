define(["./package/lib", './hi'], function (lib, hi) {
  console.log({hi})
  function foo() {
    lib.log("hello world!");
  }

  return {
    foo: foo,
  };
});
