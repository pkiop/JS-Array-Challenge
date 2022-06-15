// write your codes
function solution(inputArray) {

  // indexOf로 해당 스트링이 있는 index를 하나하나 탐색하여 값을 반환해주는데, 
  // 없을 시에 -1을 반환하기에, -1보다크면 그 스트링이 있는거니 true 

  let answer = (inputArray.indexOf('용가리')> -1);
  return answer;
}

exports.solution = solution;
