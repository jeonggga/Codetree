const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let n = input;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < i * 2 - 1; j++) {
        str += "*";
    }
    console.log(str);
}