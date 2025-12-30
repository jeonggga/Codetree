const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let arr3 = [];
let arr5 = [];

for (let i = 0; i < input.length; i++) {
    let num = input[i];
    if (num % 3 === 0) {
        arr3.push(num);
    }
    if (num % 5 === 0) {
        arr5.push(num);
    }
}
console.log(arr3.length, arr5.length);