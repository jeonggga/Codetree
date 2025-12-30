const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let i = 0;
while (true) {
    if (input[i] === 0) {
        break;
    }
    console.log(input[i]);
    i++;
}