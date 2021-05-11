const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes

const result = inputArray
                .map(value => value * value)
                .filter(value => value % 3)
                .reduce((acc, cur) => acc + cur, 0);

console.log(result);