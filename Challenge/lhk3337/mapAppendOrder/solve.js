// write your codes
function solution(inputArray) {
  return inputArray.map((arr, index) => {
    const answer = {
      name: arr,
      order: index + 1,
    };
    return answer;
  });
}

exports.solution = solution;
