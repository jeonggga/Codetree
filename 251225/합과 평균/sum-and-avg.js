const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let total = a + b;
let average = total / 2;

console.log(total, average.toFixed(1));
