const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes

const result = inputArray.filter( item => !isNaN(item) );
console.log(result);