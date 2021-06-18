const inputArray = ['홍길동', '둘리', '루피'];

// write your codes

let arr = [];
const result = inputArray
.map((inputElement) => arr.push(
    {   name : inputElement,
        order : inputArray.indexOf(inputElement)+1
    })
);
console.log(arr);
