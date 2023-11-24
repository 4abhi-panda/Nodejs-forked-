//JavaScript Immediately Invoked Function Expressions (IIFEs) are functions that are executed when they are initialized.
// (function(params, require, exports, module, __filename, __dirname){
//     const temp = "Temp";
//     console.log(params);
// })('arg');
// //IIFE function call by in the last () to call

// console.log(__dirname);
// console.log(__filename);

//event calling method
const EventEmitter = require("events");
// const emitter = new event.EventEmitter();
const event = new EventEmitter();

// call custom event
event.on("call", () => {
  console.log("Callback is called");
});

// event.emit("call");

event.on("callBack", (code, msg) => {
  console.log(`The code is ${code} and the message is ${msg}`);
});

event.emit("callBack", 200, "Success");
