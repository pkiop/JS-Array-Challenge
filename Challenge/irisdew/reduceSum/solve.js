const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes
const answer = inputArray.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(answer);
// 초기값이 없을 때 빈배열일 경우 TypeError 발생
// 초기값을 설정해야 배열의 모든 항목이 리듀서를 거친다
