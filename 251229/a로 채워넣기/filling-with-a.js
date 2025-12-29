const fs = require("fs"); 
// fs는 파일을 읽기 위한 Node.js 기본 모듈

let input = fs.readFileSync(0).toString().trim();
// 표준 입력(키보드 입력)을 문자열로 읽어옴
// 예: "leebroscode"

let a = input.slice(0, 1);
// slice(시작, 끝) → 시작 인덱스부터 끝 인덱스 '전까지'
// 0번째 문자부터 1번째 전까지 → 첫 글자만 가져옴
// "leebroscode" → "l"

let b = input.slice(2, -2);
// 2번째 인덱스부터, 끝에서 2번째 문자 '전까지'
// 인덱스: l(0) e(1) e(2) b(3) r(4) o(5) s(6) c(7) o(8) d(9) e(10)
// slice(2, -2) → e(2)부터 o(8)까지
// 결과: "ebrosco"

let c = input.slice(-1);
// -1은 문자열의 마지막 글자를 의미
// "leebroscode" → "e"

console.log(a + "a" + b + "a" + c);
// a = "l"
// b = "ebrosco"
// c = "e"
// 결과: "l" + "a" + "ebrosco" + "a" + "e"
// 출력: "laebroscoae"