// write your codes
function solution(inputArray) {

  let answer = inputArray.sort((a,b) => {
    if(a.price === b.price) return a.quantity - b.quantity;
    else return a.price - b.price;
  })
  return answer;
}
// let arr = [
//   {
//     name: '사과',
//     price: 1000,
//     quantity: 2,
//   },
//   {
//     name: '수박',
//     price: 5000,
//     quantity: 20,
//   },
//   {
//     name: '당근',
//     price: 2000,
//     quantity: 50,
//   },
//   {
//     name: '참외',
//     price: 5000,
//     quantity: 10,
//   },
//   {
//     name: '오이',
//     price: 2000,
//     quantity: 49,
//   },
// ];
// console.log(solution(arr))
exports.solution = solution;
