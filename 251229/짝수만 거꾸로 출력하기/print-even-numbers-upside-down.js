const fs = require("fs"); 
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = Number(input[0]);
let b = input[1].split(" ").map(Number);

let numArr = [];
for (let i = 0; i < a; i++) {
    let num = b[i];
    if (num % 2 === 0) {
        numArr.push(num);
    }
}
console.log(numArr.reverse().join(" "));