const solution = (inputArray) => {
  return inputArray.map(item => {
    const result = Math.pow(item, 2);
    
    // 어차피 3으로 나눈 홀수는 1밖에 없음
    if (result % 3 === 1) return result;
    // 조건에 맞지 않는 값은 0으로 반환
    return 0;
  }).reduce((total, item) => total + item, 0); // 다 더하기
}

exports.solution = solution;
