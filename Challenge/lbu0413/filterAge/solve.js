// write your codes
// const input = [
//   {
//     name: "영미",
//     age: 25,
//   },
//   {
//     name: "일미",
//     age: 35,
//   },
//   {
//     name: "이미",
//     age: 45,
//   },
//   {
//     name: "삼미",
//     age: 55,
//   },
// ];
function solution(inputArray) {
  return inputArray.filter((i) => i.age >= 30 && i.age < 50);
}

exports.solution = solution;
