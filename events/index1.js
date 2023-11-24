//js
const events = require("events");
const eventEmitter = new events.EventEmitter();

var myHandler = function (data) {
  console.log("Handler called", data);
};
// eventEmitter.on("handle", myHandler);
//second parameter is optional, but when you pass it in, it's a callback function
// and also data is passed in as an argument
// eventEmitter.emit("handle", "data");

var myCallback = function (data = null) {
  console.log("Custom callback called", data || "");
};

// Use an array to pass both the callback function and data
eventEmitter.on("handle", (data) => {
  console.log(data);
  if (
    Array.isArray(data) &&
    data.length === 2 &&
    typeof data[0] === "function"
  ) {
    const callback = data[0];
    const eventData = data[1];
    callback();
    console.log("EventData", eventData);
  } else {
    console.log("Invalid data format");
  }
});

// Emit the "handle" event with an array containing the callback and data
eventEmitter.emit("handle", [myCallback, "additionalData"]);
