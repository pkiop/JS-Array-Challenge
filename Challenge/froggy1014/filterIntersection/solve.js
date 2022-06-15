function solution(inputArray1, inputArray2) {

  // answer이라는 배열 변수를 만들어주고, filter를 사용하면서
  // 나오는 el에 대해 TargetArray.incldues() 메소드를 통해
  // 삼항 연산자를 이용해 값을 answer에 push

  let answer = [];
  inputArray1.filter((el) => {
    inputArray2.includes(el) ? answer.push(el) : null;
  })
  return answer;
}


exports.solution = solution;
