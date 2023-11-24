const fs = require("fs");
const http = require("http");
const axios = require("axios");

const filePath = "dummy.json";

async function getData() {
  try {
    const response = await axios.get("https://dummyjson.com/products/1");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function fetchData() {
  try {
    const jsonData = await getData();
    return jsonData;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

// Call the asynchronous function using async/await
async function writeToFile() {
  try {
    const json = await fetchData();
    // Write to the file
    try {
      fs.writeFileSync(filePath, JSON.stringify(json));
      console.log(`${filePath} is created and content added.`);
      // Read the file
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        const server = http.createServer((req, res) => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        });
        server.listen(3000);
      } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
      }
    } catch (err) {
      console.error(`Error writing to file ${filePath}:`, err);
    }
  } catch (err) {
    console.error("Error fetching and writing data:", err);
  }
}

writeToFile();
