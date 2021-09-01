// reduce 메소드를 사용해 최댓값의 값을 maxValue에,
// 해당 값의 index를 idx에 넣은 객체를 출력하세요

function solution(inputArray) {
  let idx = 0;
  const maxValue = inputArray.reduce((pre, cur, i) => {
    if (pre < cur) {
      idx = i;
      return cur;
    }
    return pre;
  });

  return `maxValue: ${maxValue}, idx: ${idx}`;
}

exports.solution = solution;
