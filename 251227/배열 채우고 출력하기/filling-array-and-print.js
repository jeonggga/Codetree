const fs = require("fs");
let stringArray = fs.readFileSync(0).toString().trim().split(' ');
stringArray = stringArray.reverse().join("");

console.log(stringArray);

