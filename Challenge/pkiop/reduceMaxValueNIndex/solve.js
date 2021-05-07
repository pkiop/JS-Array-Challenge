const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

const answer = inputArray.reduce((acc, el, index) => {
  if(acc?.maxValue < el) {
    return {
      maxValue: el,
      idx: index,
    }
  }
  return acc; 
}, { maxValue: 0, idx: -1})
console.log(answer);
