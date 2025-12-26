// fs 모듈을 불러온다 (파일 읽기 또는 입력 읽기용)
const fs = require("fs");

// 표준 입력을 읽어서 문자열로 가져온다
let a = fs.readFileSync(0).toString();

// 문자열을 공백(" ") 기준으로 나눠서 배열로 만든다
let arr = a.split(" ");

// 배열의 첫 번째 값을 숫자로 변환하여 n에 저장
let n = Number(arr[0]);

// 배열의 두 번째 값을 숫자로 변환하여 m에 저장
let m = Number(arr[1]);

// 처음 입력한 n 값을 콘솔에 출력
console.log(n);

// n이 2보다 큰 동안 반복
while (n > 2) {

    // n을 m으로 나눈 값을 내림(Math.floor)하여 test에 저장
    let test = Math.floor(n / m);

    // test가 0이면 반복 종료
    if (test === 0) {
        break;
    }

    // n을 test 값으로 업데이트
    n = test;

    // 업데이트된 n 값을 출력
    console.log(n);
}