const http = require("http");
const fs = require("fs");

// read file
const readFile = fs.readFileSync("rename.html", "utf-8");
// console it
console.log(readFile.toString());

const server = http.createServer((req, res) => {
  res.end(readFile.toString());
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 800");
});
