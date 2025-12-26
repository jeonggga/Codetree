// fs 모듈을 불러온다 (입력을 파일처럼 읽기 위해 사용)
const fs = require("fs");

// 표준 입력을 읽어서 문자열로 만든 뒤
// 공백(" ") 기준으로 나눠 배열로 저장한다
let input = fs.readFileSync(0).toString().trim().split(" ");

// input 배열의 첫 번째 값을 숫자로 변환해서 a에 저장
let a = Number(input[0]);

// input 배열의 두 번째 값을 숫자로 변환해서 b에 저장
let b = Number(input[1]);

// 출력할 결과를 저장할 빈 문자열을 만든다
let result = "";

// for문 시작
// i는 b부터 시작해서
// a보다 크거나 같을 때까지 반복한다
// 매 반복마다 i를 1씩 감소시킨다
for (let i = b; i >= a; i--) {

    // 현재 i 값을 문자열 result에 추가한다
    // 숫자 뒤에 공백(" ")도 함께 붙인다
    result += i + " ";
}

// 완성된 결과 문자열을 콘솔에 출력한다
console.log(result);