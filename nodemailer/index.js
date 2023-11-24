var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply@carsinafrica.com",
    pass: "akwdrnqaumfiphao",
  },
});

var mailOptions = {
  from: "noreply@carsinafrica.com",
  to: "nitesh.thakur@satgurutravel.com,pankaj.jadhav@satgurutravel.com,akash.mungal@satgurutravel.net,somnath.bhoite@satgurutravel.com",
  subject: "Hello Guys !!!",
  text: "Hello Nitesh, Pankaj, Akash, Somnath are Welocome to SatGuruTravel.com",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
