const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

const result = inputArray.reduce((acc, cur, idx) => {
  if(acc?.maxValue < cur) {
    return {
      maxValue: cur,
      idx
    }
  }
  return acc;
}, { maxValue: 0, idx: -1 });


console.log(result);