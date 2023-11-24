// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello World about");
// });

// app.listen(3000, (err) => {
//   if (err) return err;
//   console.log("listening on port 3000");
// });

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>
      <title>Profile Card</title>
    </head>
    <body>
      <div class='container mt-5'>
        <div class='card'>
          <div class='card-body'>
            <h5 class='card-title'>Profile Card</h5>
            <p class='card-text'>Name: Demo</p>
            <!-- Add other details as needed -->
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);

  // Capture screenshot
  await page.screenshot({ path: "profile_card.png" });

  await browser.close();
})();
