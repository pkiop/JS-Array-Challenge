// write your codes
function solution(inputArray) {
  const answer = inputArray.reduce(
    (acc, el, index) => {
      if (acc.maxValue < el) {
        return {
          maxValue: el,
          idx: index,
        };
      }
      return acc;
    },
    { maxValue: -9999999999999999, idx: -1 }
  );
  return answer;
}

exports.solution = solution;
