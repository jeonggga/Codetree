const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let n = Number(input[1]);

let result = a;
for (let i = 0; i < n; i++) {
    result += n;
    console.log(result);
}
