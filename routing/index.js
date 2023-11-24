const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  var response = "";
  if (req.url == "/page") {
    res.writeHead(200);
    response += "This page is Page";
  } else if (req.url != "") {
    //add status code in head like whatever you want
    res.writeHead(400);
    response += "This page is other Page";
  } else {
    res.writeHead(404);
    response += "This page is unknown " + req.url;
  }
  res.end(response);
});

server.listen(8001, "127.0.0.1", () => {
  console.log("Listening to the portL 8001");
});
