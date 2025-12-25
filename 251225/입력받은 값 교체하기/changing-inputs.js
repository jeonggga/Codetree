const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[1];
let b = input[0];

console.log(a, b);