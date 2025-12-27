const fs = require("fs"); 
// fs(File System) 모듈 불러오기
// 표준 입력을 읽기 위해 사용

let stringArray = fs.readFileSync(0).toString().trim().split(' ').map(Number);
// 입력값을 한 줄로 읽어서 문자열로 변환
// trim() : 앞뒤 공백 제거
// split(' ') : 공백 기준으로 나누기
// map(Number) : 문자열 배열 → 숫자 배열로 변환

for (let i = 0; i < 8; i++) {
    // 8번 반복해서 새로운 숫자 8개를 생성

    stringArray.push(
        (stringArray[stringArray.length - 1] 
        + stringArray[stringArray.length - 2]) % 10
    );
    // 배열의 마지막 값 + 그 앞 값
    // → 두 개를 더한 뒤 10으로 나눈 나머지 (1의 자리)
    // → 계산한 값을 배열의 맨 뒤에 추가
}

console.log(stringArray.join(" "));
// 배열의 모든 값을 공백으로 연결해서 출력