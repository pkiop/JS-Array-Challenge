const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes
const filterArray = inputArray.filter(res => !isNaN(res));
console.log(filterArray);
