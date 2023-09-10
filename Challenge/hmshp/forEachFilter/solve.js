// write your codes
const numArray = [10, 20, 30, 40, 50, 60, 70];
//배열 정의하고 초기화하기

function solution(inputArray) {
  return inputArray >= 40;
}
//filter에서 사용할 함수(40 이상인 수만 반환)

let filtered = numArray.filter(solution);
console.log(filtered);
//출력 결과: [40, 50, 60, 70]
