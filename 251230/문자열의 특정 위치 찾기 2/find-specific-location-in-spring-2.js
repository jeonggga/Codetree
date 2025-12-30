const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let strArr = ["apple", "banana", "grape", "blueberry", "orange"];

let conut = 0;
for (let i = 0; i < strArr.length; i++) {
    if (input === strArr[i][2] || input === strArr[i][3]) {
        conut++;
        console.log(strArr[i]);
    }
}
console.log(conut);