const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = input[0].split(" ");
let arr2 = input[1].split(" ");

let yeon_ma = Number(arr1[0]);
let yeon_en = Number(arr1[1]);
let dong_ma = Number(arr2[0]);
let dong_en = Number(arr2[1]);

if (yeon_ma > dong_ma && yeon_en > dong_en) {
    console.log(1);
} else {
    console.log(0);
}