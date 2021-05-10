const inputArray = [1, 7, 3, 4, 6];

// write your codes

function solution(inputArray) {
  let total = 0;
  inputArray.forEach((num) => {
    let division = (num * num) % 3;
    if (division % 2 === 1) total += num * num;
  });
  return total;
}
console.log(solution(inputArray));
