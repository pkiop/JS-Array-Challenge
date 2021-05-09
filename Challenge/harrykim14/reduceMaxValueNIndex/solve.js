const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes
let findMaxValueAndIdx = inputArray.reduce((acc, cur) => {
    return {
        maxValue : cur > acc.maxValue ? cur : acc.maxValue,
        idx : inputArray.indexOf(acc.maxValue)
    }
}, { maxValue: 0, idx: 0})