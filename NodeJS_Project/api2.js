const http = require("http");
const fs = require("fs");
const axios = require("axios");

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4dce5df2cb005cb6de4e85762fd80b37";

// Define headers
const headers = {
  "Content-Type": "text/html",
};

// const replaceVal = (file, value) => {
//   let temp = file.replace("temperature", value.main.temp);
//   let tempMin = file.replace("tempMin", value.main.temp_min);
//   let tempMax = file.replace("tempMax", value.main.temp_max);
// };

const htmlFile = fs.readFileSync("index.html", "utf8");
const server = http.createServer((req, res) => {
  // Make a GET request with headers
  axios
    .get(apiUrl, { headers })
    .then((response) => {
      var res = JSON.stringify(response.data);
      var parseData = JSON.parse(res);
      var arrData = [parseData];
      // const mapData = arrData.map((val) => {
      // replaceVal(htmlFile, val);
      // });
      const temperature = response.data.main.temp || "No data found";
      //   console.log(response.data.main.temp || "No data found");
      // Replace a placeholder in the HTML with the dynamic data
      const dynamicHtml = htmlFile.replace("{{ temperature }}", temperature);

      // Set the response content type to text/html
      //   res.setHeader("Content-Type", "text/html");

      // Send the rendered HTML to the client
      //   res.end(dynamicHtml);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

server.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server listening on port 8000");
});
