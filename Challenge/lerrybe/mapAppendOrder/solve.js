// write your codes
function solution(inputArray) {
  const resultArray = [];
  inputArray.forEach((elem, index) => {
    resultArray.push({
      "name": elem,
      "order": index + 1,
    });
  });
  return resultArray;
}

exports.solution = solution;
