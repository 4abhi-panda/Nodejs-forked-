const http = require("http");
const fs = require("fs");
const axios = require("axios");

const apiUrl = () => {
  return "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4dce5df2cb005cb6de4e85762fd80b37";
};

// Define headers
const headers = {
  "Content-Type": "text/html",
};

const htmlFile = fs.readFileSync("index.html", "utf8");
const server = http.createServer((req, res) => {
  // Make a GET request with headers
  axios
    .get(apiUrl(), { headers })
    .then((response) => {
      const temperature = response.data.main.temp || "No data found";
      console.log(response.data.main.temp || "No data found");

      // Replace a placeholder in the HTML with the dynamic data
      const dynamicHtml = htmlFile.replace("{{ temperature }}", temperature);

      // Set the response content type to text/html
      res.writeHead(200, { "Content-Type": "text/html" });

      // Send the rendered HTML to the client
      res.write(dynamicHtml);

      // End the response
      res.end();
    })
    .catch((error) => {
      console.error("Error:", error.message);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      res.end();
    });
});

server.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server listening on port 8000");
});
