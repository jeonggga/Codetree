const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0];
let b = input[1];

let arr = [];
let num = a;
while (num <= b) {
    if (num % 2 === 0) {
        arr.push(num);
        num += 3
    } else {
        arr.push(num);
        num *= 2
    }
}
console.log(arr.join(" "));