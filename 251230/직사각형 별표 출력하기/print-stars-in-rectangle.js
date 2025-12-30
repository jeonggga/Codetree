const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let n = input[0];
let m = input[1];

for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < m; j++) {
        str += "*" + " ";
    }
    console.log(str);
}