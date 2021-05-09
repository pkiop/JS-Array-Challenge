const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes

const solution = (inputArray) => {
  return inputArray.filter(v=> !isNaN(v));
}

console.log(solution(inputArray));