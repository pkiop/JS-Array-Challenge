const inputArray = ['홍길동', '둘리', '루피'];

// write your codes

const answer = inputArray.map((name, order) => {
  return {
    name: name,
    order: order+1, 
  }
})

console.log(answer);