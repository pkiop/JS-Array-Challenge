// write your codes
function solution(inputArray) {

  // answer 라는 배열 변수를 먼저 만들고 filter로 삼항 조건 연산자를 넣어 true값만 
  // answer 배열에 push 하였다.

  let answer = [];
  inputArray.filter((el) => {
    el.age >= 30 && el.age < 50 ? answer.push(el) : null;
  })
  return answer;
}


exports.solution = solution;
