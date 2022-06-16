// write your codes
function solution(inputArray) {
  let min = Number.MIN_SAFE_INTEGER;

  const answer = inputArray.reduce((acc, el, index) => {
    console.log(acc, el);
    if(acc.maxValue < el) {
      return {
        maxValue: el,
        idx: index,
      }
    }
    return acc; 
  }, { maxValue: min, idx: -1})
  return answer;
}
// let inputArray = [-24, -2, -13, -49, -999999, -17];
// console.log(solution(inputArray))
exports.solution = solution;
