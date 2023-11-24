//js
const http = require("http");
const fs = require("fs");
const requests = require("requests");
const axios = require("axios");
// const ejs = require("ejs");

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4dce5df2cb005cb6de4e85762fd80b37";

// Define headers
const headers = {
  "Content-Type": "text/html",
};

const server = http.createServer((req, res) => {
  // Make a GET request with headers
  axios
    .get(apiUrl, { headers })
    .then((response) => {
      var res = response.data;
      var jsondata = JSON.stringify(response.data);
      var parseData = JSON.parse(jsondata);
      const temperature = response.data.main.temp || "No data found";
      console.log(res.main.temp || "No data found");
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        // Ensure that data is a string
        data = data.toString();

        // Replace a placeholder in the HTML with the dynamic data
        const dynamicHtml = data.replace("{{ temperature }}", temperature);

        // Set the response content type to text/html
        // res.writeHeader({ "Content-Type": "text/html" });

        // Send the rendered HTML to the client
        res.end(dynamicHtml);
      });
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

server.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server listening on port 3000");
});
