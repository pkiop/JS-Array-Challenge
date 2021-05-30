// write your codes
// 배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요
// const inputArray = [
//     {
//       name: '영미',
//       age: 25,
//     },
//     {
//       name: '일미',
//       age: 35,
//     },
//     {
//       name: '이미',
//       age: 45,
//     },
//     {
//       name: '삼미',
//       age: 55,
//     },
//   ];

function solution(inputArray) {
    let result = inputArray.filter(item => item.age >= 30 && item.age <50);
    // console.log(item[age]);
    // console.log(result);
    return result;
}
// let now = solution(inputArray);
// // console.log(solution(inputArray));
// console.log(now);
exports.solution = solution;
