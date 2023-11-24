//js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 8000;

// Set up the storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ""); // specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    // specify the file name
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

// Set up the multer middleware
const upload = multer({ storage: storage });

// Define a route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  // 'file' in upload.single('file') corresponds to the name attribute in the HTML form
  res.send("File uploaded!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
