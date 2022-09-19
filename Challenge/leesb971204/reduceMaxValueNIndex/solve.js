//write your code

function solution(inputArray) {
  let idx = 0;

  const maxValue = inputArray.reduce((last, next, i) => {
    if (last < next) {
      idx = i;
      return next;
    }
    return last;
  });

  const newObj = {};
  newObj["maxValue"] = maxValue;
  newObj["idx"] = idx;
  return newObj;
}

exports.solution = solution;
