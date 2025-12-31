const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let n = input;

for (let i = n; 1 <= i; i--) {
    let str = "";
    for(let j = 0; j < i; j++) {
        str += "*" + " ";
    }
    console.log(str);
}