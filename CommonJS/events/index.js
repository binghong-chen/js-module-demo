var a = require("./a");
a.on("ready", function (arg) {
  arg.value++;
  console.log("module a is ready", arg);
});
