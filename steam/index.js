const fs = require("fs");

fs.writeFile("second.js", "Hello World", (err) => {
  if (err) throw err;
  console.log("written");
});
// const http = require("http");
// var filename = "input.txt";
// // fs.writeFile("input.txt", "Hello World", (err) => {
// //   //   http.get("http://www.google.com", res => {
// //   //     res.pipe(fs.createWriteStream("output.txt"));
// //   //   });
// // });
// // for (let i = 0; i < 1; i++) {
// if (fs.existsSync(filename)) {
//   console.log("exists");
//   fs.appendFile(filename, "Hello World", (err) => {
//     if (err) throw err;
//     console.log("appended");
//   });
// } else {
//   fs.writeFile(filename, "Hello World", (err) => {
//     if (err) throw err;
//     console.log("written");
//   });
// }
// // }
// const server = http.createServer();
// // const server = http.createServer((req, res) => {
// //   const data = fs.readFile(filename, (err, data) => {
// //     if (err) return console.error(err);
// //     res.write(data.toString());
// //     res.end();
// //   });
// // });

// server.on("request", (req, res) => {
//   //   const data = fs.readFile(filename, (err, data) => {
//   //     if (err) return console.error(err);
//   //     res.write(data.toString());
//   //     res.end();
//   //   });

//   const rstream = fs.createReadStream(filename);
//   rstream.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log("File get Some error: ", err);
//   });
// });

// server.listen(8080, (err) => {
//   console.log("Server listening on port 8080");
// });
