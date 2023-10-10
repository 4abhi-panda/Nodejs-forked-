const path = require('path')

console.log(path.basename('path/path.js'));
const myPath = path.parse('path/path.js')

console.log(myPath.base);