// write your codes
function solution(inputArray) {
  const isNotConditionSize = (el) => {
    if (30 <= el.age && el.age < 50) return true;
    return false;
  };
  return inputArray.filter(isNotConditionSize);
}

exports.solution = solution;
