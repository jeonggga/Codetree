const fs = require("fs"); 
// fs(File System) 모듈을 불러옴 → 입력을 파일처럼 읽기 위해 사용

let stringArray = fs.readFileSync(0).toString().trim().split('\n');
// 표준 입력(0번 파일)을 읽음
// toString() : 버퍼 → 문자열 변환
// trim() : 앞뒤 공백 제거
// split('\n') : 줄 단위로 나누기

let arrayLength = Number(stringArray[0]);
// 첫 번째 줄 → 숫자의 개수
// 문자열이므로 Number()로 숫자로 변환

let numberArray = stringArray[1].split(' ').map(Number);
// 두 번째 줄 → 숫자들
// split(' ') : 공백 기준으로 나눔
// map(Number) : 문자열 배열 → 숫자 배열로 변환

let result = [];
// 제곱한 결과를 저장할 빈 배열 생성

for (let i = 0; i < arrayLength; i++) {
    // 0부터 (숫자 개수 - 1)까지 반복

    result.push(numberArray[i] ** 2);
    // i번째 숫자를 제곱(²)해서 result 배열에 추가
}

console.log(result.join(" "));
// 배열을 공백으로 연결해서 출력
// 예: [1, 64, 25] → "1 64 25"