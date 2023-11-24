//js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "68.178.171.107",
  user: "backend_ciabackend",
  password: "[DZmd*j[Z=N1",
  database: "backend_ciabackend",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
