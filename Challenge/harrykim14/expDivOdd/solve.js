const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes
// filter를 통해 해당 조건(제곱한 수가 3으로 나눴을 때 나머지가 홀수)을 만족하는 숫자만 추려냄
// filter로 리턴받은 배열을 reduce를 사용해 제곱한 후 누적
let answer = inputArray.filter(el => ((el * el) % 3) % 2 === 1 )
                       .reduce((acc, cur) => (cur * cur) + acc, 0)

console.log(answer) // 66 
