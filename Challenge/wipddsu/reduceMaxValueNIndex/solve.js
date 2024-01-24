// write your codes
function solution(inputArray) {
  const maxValue = inputArray.reduce((acc, cur) => (acc < cur ? cur : acc), inputArray[0]);
  const index = inputArray.indexOf(maxValue);
  const result = {
    maxValue: maxValue,
    idx: index,
  };

  return result;
}

exports.solution = solution;
