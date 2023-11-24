const http = require("http");
const fs = require("fs");

var jsonData = [];

const filePath = "dummy.json";
// method 1:
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) throw err;
//     const jsonData = JSON.parse(data);
//     console.log(jsonData);
//     res.end(data);
//   });
// });

// method 2:
const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    var len = jsonData.images;
    console.log(jsonData.images.length);
    var html = "";
    for (var i = 0; i < jsonData.images.length; i++) {
      html += `<img src="${jsonData.images[i]}" width="200" height="200">`;
    }
    res.end(html);
  } catch (err) {
    console.log(err);
  }
});
server.listen(8000, "127.0.0.1");
