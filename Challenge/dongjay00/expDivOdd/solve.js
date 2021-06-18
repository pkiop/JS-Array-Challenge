function solution(inputArray) {
  const divOddArray = inputArray
    .map((num) => num ** 2)
    .filter((num) => (num % 3) % 2);
  const sum = divOddArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

exports.solution = solution;
