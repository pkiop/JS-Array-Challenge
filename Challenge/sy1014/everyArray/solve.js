function solution(inputArray) {

return inputArray.every(el => el % 2 === 0)

}

exports.solution = solution;

/* Array.prototype.every() : every메소드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다. boolean 값을 반환한다. 
참고로 빈 배열에서 호출하면 무조건 true를 반환한다. 
*/