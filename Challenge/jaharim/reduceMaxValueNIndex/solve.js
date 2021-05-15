const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

let arr = [];
const findMaxIndex = inputArray.indexOf(
    inputArray.reduce((prev, curr) => prev < curr ? curr : prev,0)
    );
const result = arr.push({ maxValue: inputArray[findMaxIndex], idx: findMaxIndex });
console.log(arr[0]);
