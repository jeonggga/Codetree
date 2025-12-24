const fs = require("fs");
let a = Number(fs.readFileSync(0).toString()).toFixed(2);

console.log(a);