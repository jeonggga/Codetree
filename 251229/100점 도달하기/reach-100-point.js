const fs = require("fs"); 
let input = Number(fs.readFileSync(0).toString().trim());

let score = [];
for (let i = input; i <= 100; i++) {
    if (i >= 90) {
        score.push("A");
    } else if (i >= 80) {
        score.push("B");
    } else if (i >= 70) {
        score.push("C");
    } else if (i >= 60) {
        score.push("D");
    } else {
        score.push("F");
    }
}
console.log(score.join(" "));
