// write your codes
function solution(inputArray) {
  const result = {};

  for (const item of inputArray) {
    const name = item['name'];
    const nickname = item['nickname'];

    result[nickname] = name;
  }

  return result;
}

exports.solution = solution;
