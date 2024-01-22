// write your codes
function solution(inputArray) {
  const result = [];
  inputArray.map((item, i) => {
    const obj = {
      name: item,
      order: i + 1,
    };
    result.push(obj);
  });

  return result;
}

exports.solution = solution;
