// fs 모듈을 불러온다 (파일 읽기 기능을 사용하기 위해 필요)
const fs = require("fs");

// 표준 입력(키보드 입력)을 읽어서 문자열로 가져온 뒤
// 숫자로 변환해서 input 변수에 저장한다
let input = Number(fs.readFileSync(0).toString().trim());

// 결과를 저장할 빈 문자열을 만든다
let result = "";

// for문 시작
// i는 input부터 시작해서
// input * 5 까지 반복하고
// 매번 input만큼 증가한다
for (let i = input; i <= input * 5; i += input) {

    // i 값을 문자열 result에 추가한다
    // 숫자 뒤에 공백(" ")도 같이 붙인다
    result += i + " ";
}

// 최종 결과 문자열을 콘솔에 출력한다
console.log(result);