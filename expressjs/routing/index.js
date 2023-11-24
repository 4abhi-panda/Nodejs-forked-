//js - Routing
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/error", (req, res) => {
  res.status(400).send("error Page");
});

app.listen(8000, (err) => {
  if (err) return console.log(err);
  console.log("Server is running on port 8000");
});
