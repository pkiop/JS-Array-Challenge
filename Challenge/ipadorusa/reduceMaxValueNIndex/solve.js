// write your codes
function solution(inputArray) {
  return inputArray.reduce(
    (acc, cur, index) => {
      if (acc.maxValue < cur) {
        acc.maxValue = cur;
        acc.idx = index;
      }
      return acc;
    },
    {
      maxValue: Number.MIN_SAFE_INTEGER,
      idx: 0,
    }
  );
}

exports.solution = solution;
