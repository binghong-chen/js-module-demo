define(function () {
  function hi() {
    console.log("hi!");
  }

  const events = require("../../CommonJS/events");

  return {
    hi,
    events,
  };
});
