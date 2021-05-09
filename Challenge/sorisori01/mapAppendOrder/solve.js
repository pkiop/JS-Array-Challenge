const inputArray = ['홍길동', '둘리', '루피'];

// write your codes
let result = [];
let i;
inputArray.map((i,e) => {
    result[e] = {'name':i,'order':e}
});
console.log(result);
