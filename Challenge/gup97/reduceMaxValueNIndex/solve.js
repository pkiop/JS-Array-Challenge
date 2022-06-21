// write your codes
function solution(inputArray) {
  return inputArray.reduce(
    (acc, cur, index) => {
      return acc.maxValue < cur ? { maxValue: cur, idx: index } : acc;
    },
    { maxValue: -Infinity, idx: -Infinity }
  );
}

//    if (acc?.maxValue < el) { <-????? 이건뭐지}
exports.solution = solution;
