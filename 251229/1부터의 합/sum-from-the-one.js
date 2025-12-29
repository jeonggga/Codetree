const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

// 1부터 더해 나갈 합을 저장할 변수
let num = 0;

// i를 1부터 100까지 1씩 증가시키며 반복
for (let i = 1; i <= 100; i++) {
    num += i;          // i를 누적해서 더함
    if (num >= input) { // 합이 N 이상이 되면
        console.log(i); // 그때 더한 수 출력
        break;          // 반복 종료
    }
}