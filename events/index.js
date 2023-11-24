//events
const fs = require("fs");
const http = require("http");

//record the activity of a file
// fs.watch("../input.html", (event, filename) => {
//   console.log(event, filename);
// });

var rs = fs.createReadStream("../input.html");
const server = http.createServer((req, res) => {
  fs.readFile("../input.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(8000, (err) => {
  console.log("Server Started at port 3000");
});
