const http = require("http");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    // Handle file upload
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "uploads");
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        // Concatenate original extension to the uploaded file
        const originalExtension = path.extname(files.file.name);
        console.log();
        const newFilePath = path.join(
          form.uploadDir,
          files.file.path + originalExtension,
        );

        fs.rename(files.file.path, newFilePath, (renameErr) => {
          if (renameErr) {
            console.error(renameErr);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            console.log("File uploaded:", newFilePath);
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("File uploaded!");
          }
        });
      }
    });
  } else {
    // Serve the HTML form for file upload
    fs.readFile("upload-form.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

// Start the server
const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
