//create weather card using weatherApi
const http = require("http");
const fs = require("fs");
const axios = require("axios");
const url = require("url");

const apiKey = "4dce5df2cb005cb6de4e85762fd80b37";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const headers = {
  "Content-Type": "text/html",
};

const htmlFile = fs.readFileSync("index.html", "utf8");

const replaceVariables = (html, replacements) => {
  let resultHtml = html;
  for (const [placeholder, value] of Object.entries(replacements)) {
    const regex = new RegExp(`{{ ${placeholder} }}`, "g");
    // console.log(regex, value);
    resultHtml = resultHtml.replace(regex, value);
  }
  return resultHtml;
};

const server = http.createServer((req, res) => {
  const queryParameters = url.parse(req.url, true).query;
  const cityName = queryParameters.q || "pune"; // Default to "pune" if q parameter is not provided
  //just type in url apiUrl?q=CityName, like this
  const dynamicApiUrl = `${apiUrl}?q=${cityName}&appid=${apiKey}`;

  axios
    .get(dynamicApiUrl, { headers })
    .then((response) => {
      const weatherData = response.data.main || {};
      const temperature = weatherData.temp || "No data found";
      const tempMin = weatherData.temp_min || "No data found";
      const tempMax = weatherData.temp_max || "No data found";

      const dynamicHtml = replaceVariables(htmlFile, {
        temperature,
        tempMin,
        tempMax,
        city: response.data.name || "Not found",
        country: response.data.sys.country || "Not found",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(dynamicHtml);
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
