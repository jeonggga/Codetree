const fs = require("fs");
// 입력값을 공백 기준으로 나눠 배열로 저장
let input = fs.readFileSync(0).toString().trim().split(" ");

// 각 값을 숫자로 변환
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

// a가 b, c보다 가장 큰 경우
if ((a > b) && (a > c)) {
    // b와 c 중 큰 값을 출력 (즉, 가운데 값)
    if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
// b가 a, c보다 가장 큰 경우
} else if ((b > a) && (b > c)) {
    // a와 c 중 큰 값을 출력 (가운데 값)
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
// c가 a, b보다 가장 큰 경우
} else if ((c > a) && (c > b)) {
    // a와 b 중 큰 값을 출력 (가운데 값)
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}