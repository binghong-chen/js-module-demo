var EventEmitter = require("events").EventEmitter;
module.exports = new EventEmitter();

console.log("events");
module.exports.on("ready", function (arg) {
  console.log(arg, arg === obj);
});

setTimeout(function () {
  module.exports.on("ready", function (arg) {
    console.log('ready 2', arg, arg === obj);
  });
}, 100);

const obj = { value: 123 };

setTimeout(function () {
  module.exports.emit("ready", obj);
}, 1000);
