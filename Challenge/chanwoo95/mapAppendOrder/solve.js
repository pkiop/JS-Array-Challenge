const inputArray = ['홍길동', '둘리', '루피'];

// write your codes

const result = inputArray.map( (name, index) => ({
    name,
    order:index+1
}))

console.log(result);