const inputArray = [1, 40, '라매', '개발자', 51.5, 'a', 88];

// write your codes

const result = [];
inputArray.forEach((item) => {
  if (typeof item === 'number') {
    result.push(item);
  }
});
console.log(result);
