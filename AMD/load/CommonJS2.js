define(['../../CommonJS/events'], function (events) {
  function hi() {
    console.log("hi!");
  }

  return {
    hi,
    events,
  };
});
  