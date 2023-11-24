const http = require("http");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Set up the storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, extraParameter) {
    extraParameter(null, "uploads/"); // specify the directory where files will be stored
  },
  filename: function (req, file, extraParameter) {
    // specify the file name
    extraParameter(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

// Set up multer
const upload = multer({ storage: storage });

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    // Handle file upload
    upload.single("file")(req, res, (err) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("File uploaded!");
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
