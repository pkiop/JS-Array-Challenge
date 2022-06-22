// write your codes
function solution(inputArray) 
{
  let answer = inputArray.sort((a,b) => {
    return a.price-b.price;
  })
  return answer;
}
// let arr = [
//     {
//         name: '사과',
//         price: 1000
//     }, {
//         name: '수박',
//         price: 5000
//     }, {
//         name: '당근',
//         price: 2000
//     }, {
//         name: '참외',
//         price: 10000
//     }
// ]
// console.log(solution(arr));


exports.solution = solution;
