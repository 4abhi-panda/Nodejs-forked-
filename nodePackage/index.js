// const chalk = require('chalk');
const validator = require('validator');


// console.log(chalk.green("This is Blue"));

const check = validator.isEmail('abhi@mail.com');
const ans = check ? "truee" : "falsee";
console.log(ans);
console.log("Hey");