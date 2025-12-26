const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

if ((input % 2 !== 0 && input % 3 === 0) || (input % 2 === 0 && input % 5 === 0)) {
    console.log("true");
} else {
    console.log("false");
}