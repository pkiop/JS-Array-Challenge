const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes
// 모든수를 제곱해서 새로운 배열을 만듭니다 -> 이 배열의 값중 3으로 나눠서 1이 남는 값만 남깁니다 -> 남은 값들을 누산하여 반환합니다.
let answer = inputArray.map((el,idx,arr)=>{return el**2}).filter(el => el%3==1).reduce((acc,cur)=>{return acc+cur;});

console.log(answer)