const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0];
let b = input[1];

let sum = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sum += i
}
console.log(sum);