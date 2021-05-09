const inputArray = [1, 40, '라매', '개발자', 51.5, 'a', 88];

// write your codes

inputArray.forEach((el) => {
  if (!isNaN(el)) console.log(el);
});
