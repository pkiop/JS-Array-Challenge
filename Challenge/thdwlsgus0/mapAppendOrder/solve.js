const inputArray = ['홍길동', '둘리', '루피'];

// write your codes

const solution = (inputArray) => {
  return inputArray.map((name,index)=>({name, order: index+1}))
}

console.log(solution(inputArray));