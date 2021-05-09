const inputArray = [100, 10, 20, 40];

// write your codes
let sum = 0;

inputArray.forEach(e => { sum += e})
console.log(sum);

const result = inputArray.reduce((a,b) => {
    console.log("a: ",a)
    console.log("b: ",b)
    console.log("a+b : ",a+b);
    return a+b;

});
console.log("reduce : ",result);