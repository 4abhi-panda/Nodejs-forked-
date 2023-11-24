//here ny js code
const http = require("http");
const fs = require("fs");
const url = require("url");
const dt = require("./exp.js");

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true);

  if (q.pathname == "/input.html") {
    var filename = ".." + q.pathname;
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return console.log("ReadFile Error: ", err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (q.pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "This is Home Page\n<br><a href='/input.html'>Go to Input Page</a>",
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page not found\n<br>");
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  }
});

server.listen(8000, (err) => {
  if (err) return console.log("Error occurs: ", err);
  console.log("Listening Port 8000");
});
