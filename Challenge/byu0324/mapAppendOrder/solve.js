// write your codes
function solution(inputArray) {
  return inputArray.map(arr => ({
    'name': arr, 'order': inputArray.indexOf(arr) + 1
  }));
}

exports.solution = solution;
