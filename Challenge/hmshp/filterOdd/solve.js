// write your codes
const numArray = [1, 2, 3, 4, 5];
//배열 선언 및 초기화

function solution(inputArray) {
  return inputArray % 2 === 1;
}
//filter에 사용할 함수 만들기(홀수일 때만 반환)

let filtered = numArray.filter(solution);
console.log(filtered);
//출력 결과: [ 1, 3, 5 ]

//함수 안 쓰고 바로 filter 하는 방법 🔽
let result = numArray.filter((el) => el % 2 === 1);
console.log(result);
//출력 결과: [ 1, 3, 5 ]
