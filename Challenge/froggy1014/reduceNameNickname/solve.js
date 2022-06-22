// write your codes
function solution(inputArray) {

  const answer = inputArray.reduce((acc, el) => {
    return {
      ...acc,
      [el.nickname]: el.name,
    }
  }, {});
  return answer;
}
// let inputArray = [
//   {
//     name: '홍길동',
//     nickname: 'hong',
//   },
//   {
//     name: '둘리',
//     nickname: '2li',
//   },
//   {
//     name: '오스트랄로피테쿠스',
//     nickname: '1Cin',
//   },
// ];

// console.log(solution(inputArray));

exports.solution = solution;
