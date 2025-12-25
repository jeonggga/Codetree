const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let total = a + b + c;

console.log(total);
console.log(total / 3);
console.log(total - (total / 3));