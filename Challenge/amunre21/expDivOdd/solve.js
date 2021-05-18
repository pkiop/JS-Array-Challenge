const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes
// 제곱한뒤 3으로 나눠서 1이 남는 값만 남깁니다 -> 남은 값들을 누산하여 반환합니다.
let answer = inputArray.filter(el => el**2%3==1).reduce((acc,cur)=>{return acc+cur;});

console.log(answer)