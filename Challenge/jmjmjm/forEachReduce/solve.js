const inputArray = [120, -20, -30, 0, 15];

let answer = '';

answer = inputArray.reduce((a, c) => {
    return a+c
}, 0)

console.log(answer);
