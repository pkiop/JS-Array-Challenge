// write your codes
function solution(inputArray) {
  // const max = inputArray.reduce((max, cur) => Math.max(max, cur), -Infinity);
  // const index = inputArray.indexOf(max);
  // return { maxValue: max, idx: index };
  const answer = inputArray.reduce(
    (acc, cur, index) => {
      if (acc.maxValue < cur) {
        return {
          maxValue: cur,
          idx: index,
        };
      }
      return acc;
    },
    { maxValue: -Infinity, idx: -1 }
  );
  return answer;
}

exports.solution = solution;
