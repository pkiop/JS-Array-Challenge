// write your codes
let bio = [
  { name: "Hennie", age: 27 },
  { name: "Mark", age: 22 },
  { name: "Katniss", age: 46 },
  { name: "Harry", age: 35 },
];
//객체

function solution(inputArray) {
  return inputArray.age >= 30 && inputArray.age < 50;
}
//filter에서 쓸 함수(나이가 30 이상 50 미만)

let filtered = bio.filter(solution);
console.log(filtered);
//출력 결과: [ { name: 'Katniss', age: 46 }, { name: 'Harry', age: 35 } ]

//함수 안 쓰고 바로 filter 하는 방법 🔽
let result = bio.filter((obj) => obj.age >= 30 && obj.age < 50);
console.log(result);
//출력 결과: [ { name: 'Katniss', age: 46 }, { name: 'Harry', age: 35 } ]
