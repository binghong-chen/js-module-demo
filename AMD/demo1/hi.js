define(["./package/lib"], function (lib) {
  function hi() {
    lib.log("hi!");
  }

  return {
    hi: hi,
  };
});
