const fs = require("fs");
const path = require("path");

const jsonData = {
  name: "Abhijeet Kamdi",
  number: 9552743409,
  gender: "male",
  field: "IT",
};
//make obj to json
const json = JSON.stringify(jsonData);
//make json to obj
// const obj = JSON.parse(jsonData, () => {});

const filePath = "jsonfile.json";

// Check if the file exists
if (fs.existsSync(filePath)) {
  console.log(`File ${filePath} exists`);
} else {
  console.error(`File ${filePath} does not exist`);
  fs.writeFile(filePath, json, (err) => {
    if (err) {
      console.log(`Failed to create File `);
    } else {
      console.log(`File Created.`);
    }
  });
}

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(`Failed to read file: ${filePath} `);
  } else {
    const org = JSON.parse(data);
    console.log(`Read Name: ${org.title}`);
  }
});
