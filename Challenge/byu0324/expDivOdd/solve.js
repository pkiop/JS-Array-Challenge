function solution(inputArray) {
  let num = inputArray.map(a => Math.pow(a, 2));
  let dis = num.filter(a => a % 3 === 1);
  return dis.reduce((total, cur) => total += cur);
}

exports.solution = solution;
